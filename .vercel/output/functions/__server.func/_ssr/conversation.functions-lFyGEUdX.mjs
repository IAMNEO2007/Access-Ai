import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BElRkhwd.mjs";
import { St as stringType, _t as arrayType, gt as anyType, xt as objectType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conversation.functions-lFyGEUdX.js
var loadConversation_createServerFn_handler = createServerRpc({
	id: "c811691c284183eaf8703393dfd3f2f7c07c3210a6aef1c1f967ba48090fa1f6",
	name: "loadConversation",
	filename: "src/lib/conversation.functions.ts"
}, (opts) => loadConversation.__executeServer(opts));
var loadConversation = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(loadConversation_createServerFn_handler, async ({ context }) => {
	const { supabase, userId } = context;
	try {
		let { data: conv } = await supabase.from("conversations").select("id").eq("user_id", userId).order("created_at", { ascending: false }).limit(1).maybeSingle();
		if (!conv) {
			const { data: created, error } = await supabase.from("conversations").insert({
				user_id: userId,
				title: "Conversation"
			}).select("id").single();
			if (error) {
				console.warn("[loadConversation] Could not create conversation:", error.message);
				return {
					conversationId: crypto.randomUUID(),
					messages: []
				};
			}
			conv = created;
		}
		const { data: rows, error: msgErr } = await supabase.from("messages").select("id, role, parts, created_at").eq("conversation_id", conv.id).order("created_at", { ascending: true });
		if (msgErr) {
			console.warn("[loadConversation] Could not load messages:", msgErr.message);
			return {
				conversationId: conv.id,
				messages: []
			};
		}
		const messages = (rows ?? []).map((r) => ({
			id: r.id,
			role: r.role,
			parts: r.parts ?? []
		}));
		return {
			conversationId: conv.id,
			messages
		};
	} catch (e) {
		console.warn("[loadConversation] DB unavailable, using local-only mode:", e);
		return {
			conversationId: crypto.randomUUID(),
			messages: []
		};
	}
});
var saveMessage_createServerFn_handler = createServerRpc({
	id: "1d28171b5a190074c0fa046cd1d4b24c860cdc784c51376a190f853153002862",
	name: "saveMessage",
	filename: "src/lib/conversation.functions.ts"
}, (opts) => saveMessage.__executeServer(opts));
var saveMessage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	conversationId: stringType().uuid(),
	message: objectType({
		id: stringType(),
		role: stringType(),
		parts: arrayType(anyType())
	}).passthrough()
}).parse(input)).handler(saveMessage_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	try {
		const { error } = await supabase.from("messages").upsert({
			id: data.message.id,
			conversation_id: data.conversationId,
			user_id: userId,
			role: data.message.role,
			parts: data.message.parts
		}, { onConflict: "id" });
		if (error) console.warn("[saveMessage] DB error:", error.message);
	} catch (e) {
		console.warn("[saveMessage] DB unavailable:", e);
	}
	return { ok: true };
});
var clearConversation_createServerFn_handler = createServerRpc({
	id: "164e695760391dc2c9686b628c5423c1b08ad598f4cd889635053052b83e9b70",
	name: "clearConversation",
	filename: "src/lib/conversation.functions.ts"
}, (opts) => clearConversation.__executeServer(opts));
var clearConversation = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ conversationId: stringType().uuid() }).parse(input)).handler(clearConversation_createServerFn_handler, async ({ data, context }) => {
	const { supabase } = context;
	try {
		const { error } = await supabase.from("messages").delete().eq("conversation_id", data.conversationId);
		if (error) console.warn("[clearConversation] DB error:", error.message);
	} catch (e) {
		console.warn("[clearConversation] DB unavailable:", e);
	}
	return { ok: true };
});
//#endregion
export { clearConversation_createServerFn_handler, loadConversation_createServerFn_handler, saveMessage_createServerFn_handler };
