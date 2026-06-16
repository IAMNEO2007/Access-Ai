import { i as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as stepCountIs, i as generateText, o as streamText, r as convertToModelMessages, s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { St as stringType, V as tool, xt as objectType, yt as enumType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as google } from "../_libs/ai-sdk__google.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DRuRFpP0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C73A5QZu.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Access.AI" },
			{
				name: "description",
				content: "An accessibility AI agent"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Access.AI"
			},
			{
				property: "og:description",
				content: "An accessibility AI agent"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "Access.AI"
			},
			{
				name: "twitter:description",
				content: "An accessibility AI agent"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fcb7e69b-77f2-4e15-89af-106733622705"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fcb7e69b-77f2-4e15-89af-106733622705"
			}
		],
		links: [{
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg"
		}, {
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$1 = () => import("./route-Di7iQBCH.mjs");
var Route$2 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		return { user: {
			id: "00000000-0000-0000-0000-000000000000",
			email: "dummy@example.com"
		} };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_authenticated-BgeOcfrc.mjs");
var Route$1 = createFileRoute("/_authenticated/")({
	head: () => ({ meta: [{ title: "Access.AI — Voice & Vision Assistant" }, {
		name: "description",
		content: "AI assistant for the visually impaired. Live camera scene description, voice Q&A, and a supervisor agent coordinating vision, memory, and speech."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SYSTEM_PROMPT = `You are Access.AI, a supervisor agent assisting a visually impaired user.

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
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json();
	const messages = body.messages;
	const frame = body.frame ?? null;
	const memory = body.memory ?? {
		preferences: [],
		facts: [],
		topics: []
	};
	if (!Array.isArray(messages)) return new Response("Messages required", { status: 400 });
	if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) return new Response("Missing GOOGLE_GENERATIVE_AI_API_KEY", { status: 500 });
	const model = google("gemini-2.0-flash");
	const baseMessages = await convertToModelMessages(messages);
	if (frame && baseMessages.length > 0) {
		const last = baseMessages[baseMessages.length - 1];
		if (last.role === "user") last.content = [...Array.isArray(last.content) ? last.content : [{
			type: "text",
			text: String(last.content ?? "")
		}], {
			type: "image",
			image: frame
		}];
	}
	const memLines = [];
	if (memory.preferences?.length) {
		memLines.push("Preferences:");
		for (const p of memory.preferences) memLines.push(`- ${p.text}`);
	}
	if (memory.facts?.length) {
		memLines.push("Facts:");
		for (const f of memory.facts) memLines.push(`- [${f.category ?? "other"}] ${f.text}`);
	}
	if (memory.topics?.length) memLines.push(`Recent topics: ${memory.topics.slice(-6).map((t) => t.text).join("; ")}`);
	return streamText({
		model,
		system: SYSTEM_PROMPT + (memLines.length ? `\n\nKNOWN USER MEMORY:\n${memLines.join("\n")}` : "\n\nKNOWN USER MEMORY: (none yet)"),
		messages: baseMessages,
		stopWhen: stepCountIs(50),
		tools: {
			vision_agent: tool({
				description: "Analyze the current camera frame focused on a specific question. Use for describing surroundings, reading text/signs, identifying objects, detecting hazards, or counting people.",
				inputSchema: objectType({ focus: stringType().describe("What to look for, e.g. 'describe the scene', 'read any visible text', 'is there a crosswalk?'") }),
				execute: async ({ focus }) => {
					if (!frame) return { result: "No camera frame available. Ask the user to enable the camera." };
					return { result: (await generateText({
						model: google("gemini-2.0-flash"),
						system: "You are a precise vision analyst for a blind user. Describe only what is visible. Mention hazards first (vehicles, stairs, obstacles). Be concise: 1-3 short sentences. Include distances/directions when estimable.",
						messages: [{
							role: "user",
							content: [{
								type: "text",
								text: focus
							}, {
								type: "image",
								image: frame
							}]
						}]
					})).text };
				}
			}),
			memory_agent: tool({
				description: "Long-term user memory. Actions: 'recall' returns all stored memory; 'save_preference' stores a user preference; 'save_fact' stores a personal fact with category; 'forget' removes items matching a substring.",
				inputSchema: objectType({
					action: enumType([
						"recall",
						"save_preference",
						"save_fact",
						"forget"
					]),
					content: stringType().optional().describe("For save_preference/save_fact: the text. For forget: substring to match."),
					category: enumType([
						"person",
						"place",
						"routine",
						"other"
					]).optional().describe("Only for save_fact.")
				}),
				execute: async ({ action, content, category }) => {
					if (action === "recall") return {
						preferences: memory.preferences ?? [],
						facts: memory.facts ?? [],
						topics: memory.topics ?? []
					};
					if (!content) return { error: "content required" };
					if (action === "save_preference") return { saved_preference: content };
					if (action === "save_fact") return {
						saved_fact: content,
						category: category ?? "other"
					};
					if (action === "forget") return { forget: content };
					return { error: "unknown action" };
				}
			}),
			speech_agent: tool({
				description: "Format the final response for text-to-speech: short, calm, no markdown, no lists. Always call this last with your final answer.",
				inputSchema: objectType({ text: stringType().describe("Final answer text to speak.") }),
				execute: async ({ text }) => {
					return { spoken: text.replace(/[*_`#>]/g, "").replace(/\s+/g, " ").trim() };
				}
			})
		}
	}).toUIMessageStreamResponse({ originalMessages: messages });
} } } });
var AuthenticatedRouteRoute = Route$2.update({
	id: "/_authenticated",
	getParentRoute: () => Route$3
});
var AuthenticatedIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var ApiChatRoute = Route.update({
	id: "/api/chat",
	path: "/api/chat",
	getParentRoute: () => Route$3
});
var AuthenticatedRouteRouteChildren = { AuthenticatedIndexRoute };
var rootRouteChildren = {
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	ApiChatRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
