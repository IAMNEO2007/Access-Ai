import { i as __toESM } from "./_runtime.mjs";
import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-BFF9PJQ_.mjs";
import { O as isRedirect, _ as useNavigate, v as useRouter } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./_ssr/esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./_ssr/auth-middleware-BElRkhwd.mjs";
import { t as supabase } from "./_ssr/client-BKd_cKQi.mjs";
import { n as DefaultChatTransport, s as require_react, t as useChat } from "./_libs/@ai-sdk/react+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { St as stringType, _t as arrayType, bt as literalType, gt as anyType, vt as discriminatedUnionType, xt as objectType, yt as enumType } from "./_libs/@ai-sdk/gateway+[...].mjs";
import { a as Sparkles, c as Pause, d as Flashlight, f as Eye, i as TriangleAlert, l as Mic, n as Users, o as Send, p as Camera, r as Type, s as Search, t as Volume2, u as LogOut } from "./_libs/lucide-react.mjs";
import { t as Markdown } from "./_libs/react-markdown+[...].mjs";
import { n as toast, t as Toaster } from "./_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated-BgeOcfrc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var emptyMemory = () => ({
	preferences: [],
	facts: [],
	topics: []
});
function newId() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
function applyMemoryOp(m, op) {
	const next = {
		preferences: [...m.preferences],
		facts: [...m.facts],
		topics: [...m.topics]
	};
	switch (op.type) {
		case "save_preference":
			if (!next.preferences.some((p) => p.text.toLowerCase() === op.text.toLowerCase())) next.preferences.push({
				id: newId(),
				text: op.text,
				createdAt: Date.now()
			});
			break;
		case "save_fact":
			if (!next.facts.some((f) => f.text.toLowerCase() === op.text.toLowerCase())) next.facts.push({
				id: newId(),
				text: op.text,
				category: op.category ?? "other",
				createdAt: Date.now()
			});
			break;
		case "forget":
			next.preferences = next.preferences.filter((p) => !p.text.toLowerCase().includes(op.match.toLowerCase()));
			next.facts = next.facts.filter((f) => !f.text.toLowerCase().includes(op.match.toLowerCase()));
			break;
		case "add_topic":
			next.topics.push({
				text: op.text,
				at: Date.now()
			});
			if (next.topics.length > 20) next.topics = next.topics.slice(-20);
			break;
		case "clear": return emptyMemory();
	}
	return next;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadConversation = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("c811691c284183eaf8703393dfd3f2f7c07c3210a6aef1c1f967ba48090fa1f6"));
var saveMessage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	conversationId: stringType().uuid(),
	message: objectType({
		id: stringType(),
		role: stringType(),
		parts: arrayType(anyType())
	}).passthrough()
}).parse(input)).handler(createSsrRpc("1d28171b5a190074c0fa046cd1d4b24c860cdc784c51376a190f853153002862"));
var clearConversation = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ conversationId: stringType().uuid() }).parse(input)).handler(createSsrRpc("164e695760391dc2c9686b628c5423c1b08ad598f4cd889635053052b83e9b70"));
var loadMemoryServer = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("0d6a1dcd893fffea5f5244675f6a7f8bf9f83d0aa9d54c15b2fc2fe9b770f1b4"));
var opSchema = discriminatedUnionType("type", [
	objectType({
		type: literalType("save_preference"),
		text: stringType().min(1)
	}),
	objectType({
		type: literalType("save_fact"),
		text: stringType().min(1),
		category: enumType([
			"person",
			"place",
			"routine",
			"other"
		]).optional()
	}),
	objectType({
		type: literalType("forget"),
		match: stringType().min(1)
	}),
	objectType({
		type: literalType("add_topic"),
		text: stringType().min(1)
	}),
	objectType({ type: literalType("clear") })
]);
var applyMemoryServerOp = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => opSchema.parse(input)).handler(createSsrRpc("cc6d3230ba42ae1315f160596950dfa134787d11abdebb50f47e8f802056bb77"));
function partsToText(msg) {
	return msg.parts.map((p) => p.type === "text" ? p.text : "").join("").trim();
}
function speak(text) {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	window.speechSynthesis.cancel();
	const u = new SpeechSynthesisUtterance(text);
	u.rate = 1;
	u.pitch = 1;
	window.speechSynthesis.speak(u);
}
function AccessAI() {
	const navigate = useNavigate();
	const loadConv = useServerFn(loadConversation);
	const saveMsg = useServerFn(saveMessage);
	const clearConv = useServerFn(clearConversation);
	const loadMem = useServerFn(loadMemoryServer);
	const applyMemOp = useServerFn(applyMemoryServerOp);
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const [cameraOn, setCameraOn] = (0, import_react.useState)(false);
	const [facing, setFacing] = (0, import_react.useState)("environment");
	const [torchOn, setTorchOn] = (0, import_react.useState)(false);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const recognitionRef = (0, import_react.useRef)(null);
	const [memory, setMemory] = (0, import_react.useState)(() => emptyMemory());
	const [conversationId, setConversationId] = (0, import_react.useState)(null);
	const memoryRef = (0, import_react.useRef)(memory);
	(0, import_react.useEffect)(() => {
		memoryRef.current = memory;
	}, [memory]);
	const { messages, sendMessage, status, setMessages, stop } = useChat({
		id: "access-ai-main",
		transport: (0, import_react.useMemo)(() => new DefaultChatTransport({ api: "/api/chat" }), []),
		onError: (e) => toast.error(e.message || "Something went wrong"),
		onFinish: async ({ message }) => {
			let speakText = "";
			let nextMem = memoryRef.current;
			for (const part of message.parts) {
				if (part.type === "tool-memory_agent" && part.state === "output-available") {
					const out = part.output;
					if (out?.saved_preference) {
						nextMem = applyMemoryOp(nextMem, {
							type: "save_preference",
							text: out.saved_preference
						});
						applyMemOp({ data: {
							type: "save_preference",
							text: out.saved_preference
						} }).catch(() => {});
						toast.success(`Remembered preference`);
					}
					if (out?.saved_fact) {
						nextMem = applyMemoryOp(nextMem, {
							type: "save_fact",
							text: out.saved_fact,
							category: out.category
						});
						applyMemOp({ data: {
							type: "save_fact",
							text: out.saved_fact,
							category: out.category
						} }).catch(() => {});
						toast.success(`Remembered ${out.category ?? "fact"}`);
					}
					if (out?.forget) {
						nextMem = applyMemoryOp(nextMem, {
							type: "forget",
							match: out.forget
						});
						applyMemOp({ data: {
							type: "forget",
							match: out.forget
						} }).catch(() => {});
						toast.success(`Forgot "${out.forget}"`);
					}
				}
				if (part.type === "tool-speech_agent" && part.state === "output-available") {
					const out = part.output;
					if (out?.spoken) speakText = out.spoken;
				}
			}
			if (nextMem !== memoryRef.current) setMemory(nextMem);
			if (!speakText) speakText = partsToText(message);
			if (speakText) speak(speakText);
			if (conversationId) try {
				await saveMsg({ data: {
					conversationId,
					message: {
						id: message.id,
						role: message.role,
						parts: message.parts
					}
				} });
			} catch (e) {
				console.error("save assistant message failed", e);
			}
		}
	});
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			try {
				const [conv, mem] = await Promise.all([loadConv(), loadMem()]);
				if (cancelled) return;
				setConversationId(conv.conversationId);
				setMessages(conv.messages);
				setMemory(mem);
			} catch (e) {
				console.error("load failed", e);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);
	const startCamera = (0, import_react.useCallback)(async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: facing },
				audio: false
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
	const stopCamera = (0, import_react.useCallback)(() => {
		streamRef.current?.getTracks().forEach((t) => t.stop());
		streamRef.current = null;
		setCameraOn(false);
	}, []);
	(0, import_react.useEffect)(() => {
		startCamera();
		return () => stopCamera();
	}, [facing]);
	const captureFrame = (0, import_react.useCallback)(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!video || !canvas || video.readyState < 2) return null;
		const w = Math.min(video.videoWidth, 1024);
		const ratio = video.videoHeight / video.videoWidth || .75;
		const h = Math.round(w * ratio);
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext("2d");
		if (!ctx) return null;
		ctx.drawImage(video, 0, 0, w, h);
		return canvas.toDataURL("image/jpeg", .7);
	}, []);
	const send = (0, import_react.useCallback)(async (text) => {
		const clean = text.trim();
		if (!clean) return;
		let currentConvId = conversationId;
		if (!currentConvId) {
			currentConvId = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "00000000-0000-0000-0000-000000000000";
			setConversationId(currentConvId);
		}
		const frame = captureFrame();
		const withTopic = applyMemoryOp(memoryRef.current, {
			type: "add_topic",
			text: clean.slice(0, 80)
		});
		setMemory(withTopic);
		applyMemOp({ data: {
			type: "add_topic",
			text: clean.slice(0, 80)
		} }).catch(() => {});
		await sendMessage({ text: clean }, { body: {
			frame,
			memory: withTopic
		} });
		setInput("");
	}, [
		captureFrame,
		sendMessage,
		conversationId,
		applyMemOp
	]);
	const toggleListen = (0, import_react.useCallback)(() => {
		if (typeof window === "undefined") return;
		const w = window;
		const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
		if (!SR) {
			toast.error("Voice input not supported in this browser");
			return;
		}
		if (listening) {
			recognitionRef.current?.stop();
			return;
		}
		const rec = new SR();
		rec.lang = "en-US";
		rec.continuous = false;
		rec.interimResults = false;
		rec.onresult = (e) => {
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
	const lastSpokenPart = lastAssistant?.parts.find((p) => p.type === "tool-speech_agent" && "state" in p && p.state === "output-available");
	const displayText = (lastSpokenPart && "output" in lastSpokenPart ? lastSpokenPart.output.spoken : void 0) || lastAssistantText;
	const isLoading = status === "submitted" || status === "streaming";
	const quickActions = [
		{
			icon: Eye,
			label: "Describe surroundings",
			q: "Describe my surroundings."
		},
		{
			icon: Type,
			label: "Read text",
			q: "Read any visible text."
		},
		{
			icon: Search,
			label: "Find objects",
			q: "What objects are around me?"
		},
		{
			icon: Users,
			label: "People around",
			q: "Are there people around me?"
		}
	];
	const activeAgents = (0, import_react.useMemo)(() => {
		const last = messages[messages.length - 1];
		if (!last || last.role !== "assistant") return [];
		return last.parts.filter((p) => p.type.startsWith("tool-")).map((p) => {
			return {
				name: p.type.replace("tool-", ""),
				state: "state" in p ? p.state : ""
			};
		});
	}, [messages]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen px-4 py-6 sm:px-6 max-w-md mx-auto flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-xl flex items-center justify-center",
						style: { background: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-primary-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-bold tracking-tight",
						children: "Access.AI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: async () => {
							setMessages([]);
							if (conversationId) try {
								await clearConv({ data: { conversationId } });
							} catch (e) {
								console.error(e);
							}
							toast.success("New conversation");
						},
						className: "text-xs text-muted-foreground hover:text-foreground transition",
						children: "New"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: async () => {
							await supabase.auth.signOut();
							navigate({ to: "/" });
						},
						className: "text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-1",
						"aria-label": "Sign out",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-3.5 h-3.5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-3xl overflow-hidden border border-border bg-black aspect-[3/4] shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						playsInline: true,
						muted: true,
						className: "w-full h-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "hidden"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-xs font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2 h-2 rounded-full ${cameraOn ? "bg-green-400 animate-pulse" : "bg-red-500"}` }), cameraOn ? "Live" : "Off"]
					}),
					displayText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-3 right-3 bottom-3 rounded-2xl bg-black/70 backdrop-blur-md p-3 text-sm leading-snug",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4 mt-0.5 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 prose prose-invert prose-sm max-w-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { children: displayText })
							})]
						})
					}),
					isLoading && activeAgents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-3 right-3 flex flex-col gap-1.5 items-end",
						children: activeAgents.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-2.5 py-1 rounded-full bg-primary/30 backdrop-blur text-[10px] font-medium border border-primary/40",
							children: [
								a.name.replace("_", " "),
								" ",
								a.state === "output-available" ? "✓" : "…"
							]
						}, i))
					}),
					isLoading && activeAgents.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/30 backdrop-blur text-[10px] font-medium border border-primary/40",
						children: "Thinking…"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: quickActions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => send(a.q),
					disabled: isLoading,
					className: "flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card border border-border text-left text-xs font-medium hover:border-primary/50 hover:bg-primary/10 transition disabled:opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "w-4 h-4 text-accent" }), a.label]
				}, a.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-around py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTorchOn((v) => !v),
						className: "w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition",
						"aria-label": "Flashlight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flashlight, { className: `w-5 h-5 ${torchOn ? "text-accent" : ""}` })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `relative ${listening ? "listening-ring" : ""}`,
							children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => stop(),
								className: "relative w-20 h-20 rounded-full flex items-center justify-center text-primary-foreground animate-pulse-glow",
								style: { background: "var(--gradient-primary)" },
								"aria-label": "Stop",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-8 h-8" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggleListen,
								className: "relative w-20 h-20 rounded-full flex items-center justify-center text-primary-foreground animate-pulse-glow disabled:opacity-60",
								style: { background: "var(--gradient-primary)" },
								"aria-label": "Tap to speak",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-8 h-8" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs mt-2 text-muted-foreground",
							children: listening ? "Listening…" : isLoading ? "Working…" : "Tap to Speak"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFacing((f) => f === "user" ? "environment" : "user"),
						className: "w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition",
						"aria-label": "Flip camera",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-5 h-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send(input);
				},
				className: "flex items-center gap-2 rounded-2xl border border-border bg-card p-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask anything…",
					disabled: isLoading,
					className: "flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading || !input.trim(),
					className: "w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground disabled:opacity-50 transition",
					style: { background: "var(--gradient-primary)" },
					"aria-label": "Send",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => speak("Emergency contact called. Sharing your location."),
				className: "w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-destructive/40 bg-destructive/10 text-destructive font-medium text-sm hover:bg-destructive/20 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-4 h-4" }), "Emergency"]
			}),
			memory.preferences.length + memory.facts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[10px] text-center text-muted-foreground space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					memory.preferences.length,
					" preference",
					memory.preferences.length === 1 ? "" : "s",
					" · ",
					memory.facts.length,
					" fact",
					memory.facts.length === 1 ? "" : "s",
					" remembered"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setMemory(applyMemoryOp(memory, { type: "clear" }));
						toast.success("Memory cleared");
					},
					className: "underline hover:text-foreground",
					children: "Clear memory"
				})]
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessAI, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] });
}
//#endregion
export { Index as component };
