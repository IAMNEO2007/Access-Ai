import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BElRkhwd.mjs";
import { St as stringType, bt as literalType, vt as discriminatedUnionType, xt as objectType, yt as enumType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/memory.functions-D8MYIVIU.js
var emptyMemoryStore = {
	preferences: [],
	facts: [],
	topics: []
};
var loadMemoryServer_createServerFn_handler = createServerRpc({
	id: "0d6a1dcd893fffea5f5244675f6a7f8bf9f83d0aa9d54c15b2fc2fe9b770f1b4",
	name: "loadMemoryServer",
	filename: "src/lib/memory.functions.ts"
}, (opts) => loadMemoryServer.__executeServer(opts));
var loadMemoryServer = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(loadMemoryServer_createServerFn_handler, async ({ context }) => {
	const { supabase, userId } = context;
	try {
		const [prefs, facts, topics] = await Promise.all([
			supabase.from("memory_preferences").select("id, key, value, created_at").eq("user_id", userId),
			supabase.from("memory_facts").select("id, category, content, created_at").eq("user_id", userId),
			supabase.from("memory_topics").select("topic, created_at").eq("user_id", userId).order("created_at", { ascending: true }).limit(20)
		]);
		return {
			preferences: (prefs.data ?? []).map((p) => ({
				id: p.id,
				text: p.value,
				createdAt: new Date(p.created_at).getTime()
			})),
			facts: (facts.data ?? []).map((f) => ({
				id: f.id,
				text: f.content,
				category: f.category ?? "other",
				createdAt: new Date(f.created_at).getTime()
			})),
			topics: (topics.data ?? []).map((t) => ({
				text: t.topic,
				at: new Date(t.created_at).getTime()
			}))
		};
	} catch (e) {
		console.warn("[loadMemoryServer] DB unavailable, returning empty memory:", e);
		return emptyMemoryStore;
	}
});
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
var applyMemoryServerOp_createServerFn_handler = createServerRpc({
	id: "cc6d3230ba42ae1315f160596950dfa134787d11abdebb50f47e8f802056bb77",
	name: "applyMemoryServerOp",
	filename: "src/lib/memory.functions.ts"
}, (opts) => applyMemoryServerOp.__executeServer(opts));
var applyMemoryServerOp = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => opSchema.parse(input)).handler(applyMemoryServerOp_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	try {
		switch (data.type) {
			case "save_preference": {
				const key = data.text.toLowerCase().slice(0, 120);
				await supabase.from("memory_preferences").upsert({
					user_id: userId,
					key,
					value: data.text
				}, { onConflict: "user_id,key" });
				return { ok: true };
			}
			case "save_fact": {
				const { data: existing } = await supabase.from("memory_facts").select("id").eq("user_id", userId).ilike("content", data.text).limit(1);
				if (existing && existing.length) return { ok: true };
				await supabase.from("memory_facts").insert({
					user_id: userId,
					category: data.category ?? "other",
					content: data.text
				});
				return { ok: true };
			}
			case "forget": {
				const m = `%${data.match}%`;
				await supabase.from("memory_preferences").delete().eq("user_id", userId).ilike("value", m);
				await supabase.from("memory_facts").delete().eq("user_id", userId).ilike("content", m);
				return { ok: true };
			}
			case "add_topic": {
				await supabase.from("memory_topics").insert({
					user_id: userId,
					topic: data.text
				});
				const { data: all } = await supabase.from("memory_topics").select("id, created_at").eq("user_id", userId).order("created_at", { ascending: false });
				if (all && all.length > 20) {
					const toDelete = all.slice(20).map((r) => r.id);
					await supabase.from("memory_topics").delete().in("id", toDelete);
				}
				return { ok: true };
			}
			case "clear":
				await Promise.all([
					supabase.from("memory_preferences").delete().eq("user_id", userId),
					supabase.from("memory_facts").delete().eq("user_id", userId),
					supabase.from("memory_topics").delete().eq("user_id", userId)
				]);
				return { ok: true };
		}
	} catch (e) {
		console.warn("[applyMemoryServerOp] DB error, ignoring:", e);
		return { ok: true };
	}
});
//#endregion
export { applyMemoryServerOp_createServerFn_handler, loadMemoryServer_createServerFn_handler };
