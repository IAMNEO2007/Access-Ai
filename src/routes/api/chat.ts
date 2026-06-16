import { google } from "@ai-sdk/google";
import { createFileRoute } from "@tanstack/react-router";
import {
  convertToModelMessages,
  generateText,
  streamText,
  tool,
  stepCountIs,
  type UIMessage,
} from "ai";
import { z } from "zod";

type ChatBody = {
  messages?: UIMessage[];
  frame?: string | null; // data URL of latest camera frame
  memory?: {
    preferences?: { text: string }[];
    facts?: { text: string; category?: string }[];
    topics?: { text: string }[];
  };
};

const SYSTEM_PROMPT = `You are Access.AI, a supervisor agent assisting a visually impaired user.

You coordinate three specialist agents via tools:
- vision_agent: analyzes the live camera frame for a specific question
- memory_agent: structured long-term memory. Use to recall, save preferences, save facts (people/places/routines), or forget items.
- speech_agent: formats your final reply for spoken delivery (short, clear, calm)

RULES:
- Always call vision_agent first when the user asks anything about their surroundings, what's in front of them, reading text, finding objects, or describing a scene.
- Use memory_agent(action:"recall") at the start of any turn that depends on user history (names, places, routines, preferences).
- Use memory_agent(action:"save_preference") when the user states a preference ("I prefer...", "always...", "don't...", "I like..."). Use memory_agent(action:"save_fact") for personal facts (names, addresses, relationships, routines) — set category to person|place|routine|other.
- Use memory_agent(action:"forget", match:"...") when the user asks you to forget something.
- Never re-save a fact already present in KNOWN USER MEMORY.
- ALWAYS finish by calling speech_agent on your final answer text. Then output that exact formatted text as your reply.
- Keep replies under 3 sentences. Be warm, direct, and safety-aware. Mention hazards (cars, stairs, crosswalks) first.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ChatBody;
        const messages = body.messages;
        const frame = body.frame ?? null;
        const memory = body.memory ?? { preferences: [], facts: [], topics: [] };

        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }

        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
        if (!apiKey) return new Response("Missing GOOGLE_GENERATIVE_AI_API_KEY", { status: 500 });

        const model = google("gemini-2.0-flash");

        const baseMessages = await convertToModelMessages(messages);

        // Inject the latest camera frame into the most recent user message so
        // vision-capable models can see it directly.
        if (frame && baseMessages.length > 0) {
          const last = baseMessages[baseMessages.length - 1];
          if (last.role === "user") {
            const existing = Array.isArray(last.content)
              ? last.content
              : [{ type: "text" as const, text: String(last.content ?? "") }];
            last.content = [...existing, { type: "image", image: frame } as never] as never;
          }
        }

        const memLines: string[] = [];
        if (memory.preferences?.length) {
          memLines.push("Preferences:");
          for (const p of memory.preferences) memLines.push(`- ${p.text}`);
        }
        if (memory.facts?.length) {
          memLines.push("Facts:");
          for (const f of memory.facts) memLines.push(`- [${f.category ?? "other"}] ${f.text}`);
        }
        if (memory.topics?.length) {
          memLines.push(
            `Recent topics: ${memory.topics
              .slice(-6)
              .map((t) => t.text)
              .join("; ")}`,
          );
        }
        const memoryBlock = memLines.length
          ? `\n\nKNOWN USER MEMORY:\n${memLines.join("\n")}`
          : "\n\nKNOWN USER MEMORY: (none yet)";

        const result = streamText({
          model,
          system: SYSTEM_PROMPT + memoryBlock,
          messages: baseMessages,
          stopWhen: stepCountIs(50),
          tools: {
            vision_agent: tool({
              description:
                "Analyze the current camera frame focused on a specific question. Use for describing surroundings, reading text/signs, identifying objects, detecting hazards, or counting people.",
              inputSchema: z.object({
                focus: z
                  .string()
                  .describe(
                    "What to look for, e.g. 'describe the scene', 'read any visible text', 'is there a crosswalk?'",
                  ),
              }),
              execute: async ({ focus }) => {
                if (!frame) {
                  return {
                    result: "No camera frame available. Ask the user to enable the camera.",
                  };
                }
                const vision = await generateText({
                  model: google("gemini-2.0-flash"),
                  system:
                    "You are a precise vision analyst for a blind user. Describe only what is visible. Mention hazards first (vehicles, stairs, obstacles). Be concise: 1-3 short sentences. Include distances/directions when estimable.",
                  messages: [
                    {
                      role: "user",
                      content: [
                        { type: "text", text: focus },
                        { type: "image", image: frame },
                      ],
                    },
                  ],
                });
                return { result: vision.text };
              },
            }),
            memory_agent: tool({
              description:
                "Long-term user memory. Actions: 'recall' returns all stored memory; 'save_preference' stores a user preference; 'save_fact' stores a personal fact with category; 'forget' removes items matching a substring.",
              inputSchema: z.object({
                action: z.enum(["recall", "save_preference", "save_fact", "forget"]),
                content: z
                  .string()
                  .optional()
                  .describe(
                    "For save_preference/save_fact: the text. For forget: substring to match.",
                  ),
                category: z
                  .enum(["person", "place", "routine", "other"])
                  .optional()
                  .describe("Only for save_fact."),
              }),
              execute: async ({ action, content, category }) => {
                if (action === "recall") {
                  return {
                    preferences: memory.preferences ?? [],
                    facts: memory.facts ?? [],
                    topics: memory.topics ?? [],
                  };
                }
                if (!content) return { error: "content required" };
                if (action === "save_preference") {
                  return { saved_preference: content };
                }
                if (action === "save_fact") {
                  return {
                    saved_fact: content,
                    category: category ?? "other",
                  };
                }
                if (action === "forget") {
                  return { forget: content };
                }
                return { error: "unknown action" };
              },
            }),
            speech_agent: tool({
              description:
                "Format the final response for text-to-speech: short, calm, no markdown, no lists. Always call this last with your final answer.",
              inputSchema: z.object({
                text: z.string().describe("Final answer text to speak."),
              }),
              execute: async ({ text }) => {
                const cleaned = text
                  .replace(/[*_`#>]/g, "")
                  .replace(/\s+/g, " ")
                  .trim();
                return { spoken: cleaned };
              },
            }),
          },
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages,
        });
      },
    },
  },
});
