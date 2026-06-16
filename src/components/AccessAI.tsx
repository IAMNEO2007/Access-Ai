import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import {
  Camera,
  Flashlight,
  Mic,
  Pause,
  Send,
  Sparkles,
  Volume2,
  AlertTriangle,
  Eye,
  Search,
  Users,
  Type,
  LogOut,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { applyMemoryOp, emptyMemory, type MemoryStore } from "@/lib/memory";
import { loadConversation, saveMessage, clearConversation } from "@/lib/conversation.functions";
import { loadMemoryServer, applyMemoryServerOp } from "@/lib/memory.functions";
import { supabase } from "@/integrations/supabase/client";

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: (e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void;
  onend: () => void;
  onerror: () => void;
  start: () => void;
  stop: () => void;
};

function partsToText(msg: UIMessage): string {
  return msg.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("")
    .trim();
}

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 1.0;
  u.pitch = 1.0;
  window.speechSynthesis.speak(u);
}

export function AccessAI() {
  const navigate = useNavigate();
  const loadConv = useServerFn(loadConversation);
  const saveMsg = useServerFn(saveMessage);
  const clearConv = useServerFn(clearConversation);
  const loadMem = useServerFn(loadMemoryServer);
  const applyMemOp = useServerFn(applyMemoryServerOp);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [facing, setFacing] = useState<"environment" | "user">("environment");
  const [torchOn, setTorchOn] = useState(false);
  const [listening, setListening] = useState(false);
  const [input, setInput] = useState("");
  const recognitionRef = useRef<unknown>(null);
  const [memory, setMemory] = useState<MemoryStore>(() => emptyMemory());
  const [conversationId, setConversationId] = useState<string | null>(null);
  const memoryRef = useRef(memory);
  useEffect(() => {
    memoryRef.current = memory;
  }, [memory]);

  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);

  const { messages, sendMessage, status, setMessages, stop } = useChat({
    id: "access-ai-main",
    transport,
    onError: (e) => toast.error(e.message || "Something went wrong"),
    onFinish: async ({ message }) => {
      let speakText = "";
      let nextMem = memoryRef.current;
      for (const part of message.parts) {
        if (part.type === "tool-memory_agent" && part.state === "output-available") {
          const out = part.output as {
            saved_preference?: string;
            saved_fact?: string;
            category?: "person" | "place" | "routine" | "other";
            forget?: string;
          };
          if (out?.saved_preference) {
            nextMem = applyMemoryOp(nextMem, {
              type: "save_preference",
              text: out.saved_preference,
            });
            applyMemOp({ data: { type: "save_preference", text: out.saved_preference } }).catch(
              () => {},
            );
            toast.success(`Remembered preference`);
          }
          if (out?.saved_fact) {
            nextMem = applyMemoryOp(nextMem, {
              type: "save_fact",
              text: out.saved_fact,
              category: out.category,
            });
            applyMemOp({
              data: { type: "save_fact", text: out.saved_fact, category: out.category },
            }).catch(() => {});
            toast.success(`Remembered ${out.category ?? "fact"}`);
          }
          if (out?.forget) {
            nextMem = applyMemoryOp(nextMem, {
              type: "forget",
              match: out.forget,
            });
            applyMemOp({ data: { type: "forget", match: out.forget } }).catch(() => {});
            toast.success(`Forgot "${out.forget}"`);
          }
        }
        if (part.type === "tool-speech_agent" && part.state === "output-available") {
          const out = part.output as { spoken?: string };
          if (out?.spoken) speakText = out.spoken;
        }
      }
      if (nextMem !== memoryRef.current) setMemory(nextMem);
      if (!speakText) speakText = partsToText(message);
      if (speakText) speak(speakText);
      if (conversationId) {
        try {
          await saveMsg({
            data: {
              conversationId,
              message: {
                id: message.id,
                role: message.role,
                parts: message.parts as never,
              },
            },
          });
        } catch (e) {
          console.error("save assistant message failed", e);
        }
      }
    },
  });

  // Hydrate conversation + memory from Cloud
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [conv, mem] = await Promise.all([loadConv(), loadMem()]);
        if (cancelled) return;
        setConversationId(conv.conversationId);
        setMessages(conv.messages as unknown as UIMessage[]);
        setMemory(mem);
      } catch (e) {
        console.error("load failed", e);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Camera management
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraOn(true);
    } catch {
      toast.error("Camera access denied");
    }
  }, [facing]);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOn(false);
  }, []);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facing]);

  const captureFrame = useCallback((): string | null => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return null;
    const w = Math.min(video.videoWidth, 1024);
    const ratio = video.videoHeight / video.videoWidth || 0.75;
    const h = Math.round(w * ratio);
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, w, h);
    return canvas.toDataURL("image/jpeg", 0.7);
  }, []);

  const send = useCallback(
    async (text: string) => {
      const clean = text.trim();
      if (!clean) return;
      
      let currentConvId = conversationId;
      if (!currentConvId) {
        currentConvId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : "00000000-0000-0000-0000-000000000000";
        setConversationId(currentConvId);
      }
      
      const frame = captureFrame();
      const withTopic = applyMemoryOp(memoryRef.current, {
        type: "add_topic",
        text: clean.slice(0, 80),
      });
      setMemory(withTopic);
      applyMemOp({ data: { type: "add_topic", text: clean.slice(0, 80) } }).catch(() => {});
      await sendMessage({ text: clean }, { body: { frame, memory: withTopic } });
      setInput("");
    },
    [captureFrame, sendMessage, conversationId, applyMemOp],
  );

  // Speech recognition
  const toggleListen = useCallback(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) {
      toast.error("Voice input not supported in this browser");
      return;
    }
    if (listening) {
      (recognitionRef.current as { stop: () => void } | null)?.stop();
      return;
    }
    const rec = new SR();
    rec.lang = "en-US";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => {
      const transcript = e.results[0]?.[0]?.transcript ?? "";
      if (transcript) send(transcript);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    rec.start();
    recognitionRef.current = rec;
    setListening(true);
  }, [listening, send]);

  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
  const lastAssistantText = lastAssistant ? partsToText(lastAssistant) : "";
  const lastSpokenPart = lastAssistant?.parts.find(
    (p) => p.type === "tool-speech_agent" && "state" in p && p.state === "output-available",
  );
  const displayText =
    (lastSpokenPart && "output" in lastSpokenPart
      ? (lastSpokenPart.output as { spoken?: string }).spoken
      : undefined) || lastAssistantText;

  const isLoading = status === "submitted" || status === "streaming";

  const quickActions = [
    { icon: Eye, label: "Describe surroundings", q: "Describe my surroundings." },
    { icon: Type, label: "Read text", q: "Read any visible text." },
    { icon: Search, label: "Find objects", q: "What objects are around me?" },
    { icon: Users, label: "People around", q: "Are there people around me?" },
  ];

  // Find the latest in-flight tool calls to show "agent activity"
  const activeAgents = useMemo(() => {
    const last = messages[messages.length - 1];
    if (!last || last.role !== "assistant") return [];
    return last.parts
      .filter((p) => p.type.startsWith("tool-"))
      .map((p) => {
        const name = p.type.replace("tool-", "");
        const state = "state" in p ? (p.state as string) : "";
        return { name, state };
      });
  }, [messages]);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 max-w-md mx-auto flex flex-col gap-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Access.AI</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={async () => {
              setMessages([]);
              if (conversationId) {
                try {
                  await clearConv({ data: { conversationId } });
                } catch (e) {
                  console.error(e);
                }
              }
              toast.success("New conversation");
            }}
            className="text-xs text-muted-foreground hover:text-foreground transition"
          >
            New
          </button>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              navigate({ to: "/" });
            }}
            className="text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-1"
            aria-label="Sign out"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Camera viewport */}
      <div className="relative rounded-3xl overflow-hidden border border-border bg-black aspect-[3/4] shadow-[var(--shadow-card)]">
        <video ref={videoRef} playsInline muted className="w-full h-full object-cover" />
        <canvas ref={canvasRef} className="hidden" />

        {/* Live badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-xs font-medium">
          <span
            className={`w-2 h-2 rounded-full ${cameraOn ? "bg-green-400 animate-pulse" : "bg-red-500"}`}
          />
          {cameraOn ? "Live" : "Off"}
        </div>

        {/* AI Response overlay */}
        {displayText && (
          <div className="absolute left-3 right-3 bottom-3 rounded-2xl bg-black/70 backdrop-blur-md p-3 text-sm leading-snug">
            <div className="flex items-start gap-2">
              <Volume2 className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div className="flex-1 prose prose-invert prose-sm max-w-none">
                <ReactMarkdown>{displayText}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Agent activity */}
        {isLoading && activeAgents.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
            {activeAgents.map((a, i) => (
              <div
                key={i}
                className="px-2.5 py-1 rounded-full bg-primary/30 backdrop-blur text-[10px] font-medium border border-primary/40"
              >
                {a.name.replace("_", " ")} {a.state === "output-available" ? "✓" : "…"}
              </div>
            ))}
          </div>
        )}

        {isLoading && activeAgents.length === 0 && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/30 backdrop-blur text-[10px] font-medium border border-primary/40">
            Thinking…
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-2">
        {quickActions.map((a) => (
          <button
            key={a.label}
            onClick={() => send(a.q)}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card border border-border text-left text-xs font-medium hover:border-primary/50 hover:bg-primary/10 transition disabled:opacity-50"
          >
            <a.icon className="w-4 h-4 text-accent" />
            {a.label}
          </button>
        ))}
      </div>

      {/* Camera controls + mic */}
      <div className="flex items-center justify-around py-2">
        <button
          onClick={() => setTorchOn((v) => !v)}
          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition"
          aria-label="Flashlight"
        >
          <Flashlight className={`w-5 h-5 ${torchOn ? "text-accent" : ""}`} />
        </button>

        <div className="relative flex flex-col items-center">
          <div className={`relative ${listening ? "listening-ring" : ""}`}>
            {isLoading ? (
              <button
                onClick={() => stop()}
                className="relative w-20 h-20 rounded-full flex items-center justify-center text-primary-foreground animate-pulse-glow"
                style={{ background: "var(--gradient-primary)" }}
                aria-label="Stop"
              >
                <Pause className="w-8 h-8" />
              </button>
            ) : (
              <button
                onClick={toggleListen}
                className="relative w-20 h-20 rounded-full flex items-center justify-center text-primary-foreground animate-pulse-glow disabled:opacity-60"
                style={{ background: "var(--gradient-primary)" }}
                aria-label="Tap to speak"
              >
                <Mic className="w-8 h-8" />
              </button>
            )}
          </div>
          <span className="text-xs mt-2 text-muted-foreground">
            {listening ? "Listening…" : isLoading ? "Working…" : "Tap to Speak"}
          </span>
        </div>

        <button
          onClick={() => setFacing((f) => (f === "user" ? "environment" : "user"))}
          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition"
          aria-label="Flip camera"
        >
          <Camera className="w-5 h-5" />
        </button>
      </div>

      {/* Text input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 rounded-2xl border border-border bg-card p-1.5"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything…"
          disabled={isLoading}
          className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground disabled:opacity-50 transition"
          style={{ background: "var(--gradient-primary)" }}
          aria-label="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Emergency */}
      <button
        onClick={() => speak("Emergency contact called. Sharing your location.")}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-destructive/40 bg-destructive/10 text-destructive font-medium text-sm hover:bg-destructive/20 transition"
      >
        <AlertTriangle className="w-4 h-4" />
        Emergency
      </button>

      {memory.preferences.length + memory.facts.length > 0 && (
        <div className="text-[10px] text-center text-muted-foreground space-y-1">
          <p>
            {memory.preferences.length} preference
            {memory.preferences.length === 1 ? "" : "s"} · {memory.facts.length} fact
            {memory.facts.length === 1 ? "" : "s"} remembered
          </p>
          <button
            onClick={() => {
              setMemory(applyMemoryOp(memory, { type: "clear" }));
              toast.success("Memory cleared");
            }}
            className="underline hover:text-foreground"
          >
            Clear memory
          </button>
        </div>
      )}
    </div>
  );
}
