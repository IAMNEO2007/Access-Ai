import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import type { MemoryStore } from "@/lib/memory";

const emptyMemoryStore: MemoryStore = { preferences: [], facts: [], topics: [] };

export const loadMemoryServer = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<MemoryStore> => {
    const { supabase, userId } = context;
    try {
      const [prefs, facts, topics] = await Promise.all([
        supabase
          .from("memory_preferences")
          .select("id, key, value, created_at")
          .eq("user_id", userId),
        supabase
          .from("memory_facts")
          .select("id, category, content, created_at")
          .eq("user_id", userId),
        supabase
          .from("memory_topics")
          .select("topic, created_at")
          .eq("user_id", userId)
          .order("created_at", { ascending: true })
          .limit(20),
      ]);
      return {
        preferences: (prefs.data ?? []).map((p) => ({
          id: p.id as string,
          text: p.value as string,
          createdAt: new Date(p.created_at as string).getTime(),
        })),
        facts: (facts.data ?? []).map((f) => ({
          id: f.id as string,
          text: f.content as string,
          category: (f.category as MemoryStore["facts"][number]["category"]) ?? "other",
          createdAt: new Date(f.created_at as string).getTime(),
        })),
        topics: (topics.data ?? []).map((t) => ({
          text: t.topic as string,
          at: new Date(t.created_at as string).getTime(),
        })),
      };
    } catch (e) {
      console.warn("[loadMemoryServer] DB unavailable, returning empty memory:", e);
      return emptyMemoryStore;
    }
  });

const opSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("save_preference"), text: z.string().min(1) }),
  z.object({
    type: z.literal("save_fact"),
    text: z.string().min(1),
    category: z.enum(["person", "place", "routine", "other"]).optional(),
  }),
  z.object({ type: z.literal("forget"), match: z.string().min(1) }),
  z.object({ type: z.literal("add_topic"), text: z.string().min(1) }),
  z.object({ type: z.literal("clear") }),
]);

export const applyMemoryServerOp = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((input: unknown) => opSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    try {
      switch (data.type) {
        case "save_preference": {
          const key = data.text.toLowerCase().slice(0, 120);
          await supabase
            .from("memory_preferences")
            .upsert({ user_id: userId, key, value: data.text }, { onConflict: "user_id,key" });
          return { ok: true };
        }
        case "save_fact": {
          const { data: existing } = await supabase
            .from("memory_facts")
            .select("id")
            .eq("user_id", userId)
            .ilike("content", data.text)
            .limit(1);
          if (existing && existing.length) return { ok: true };
          await supabase.from("memory_facts").insert({
            user_id: userId,
            category: data.category ?? "other",
            content: data.text,
          });
          return { ok: true };
        }
        case "forget": {
          const m = `%${data.match}%`;
          await supabase
            .from("memory_preferences")
            .delete()
            .eq("user_id", userId)
            .ilike("value", m);
          await supabase.from("memory_facts").delete().eq("user_id", userId).ilike("content", m);
          return { ok: true };
        }
        case "add_topic": {
          await supabase.from("memory_topics").insert({ user_id: userId, topic: data.text });
          // trim to last 20
          const { data: all } = await supabase
            .from("memory_topics")
            .select("id, created_at")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });
          if (all && all.length > 20) {
            const toDelete = all.slice(20).map((r) => r.id as string);
            await supabase.from("memory_topics").delete().in("id", toDelete);
          }
          return { ok: true };
        }
        case "clear": {
          await Promise.all([
            supabase.from("memory_preferences").delete().eq("user_id", userId),
            supabase.from("memory_facts").delete().eq("user_id", userId),
            supabase.from("memory_topics").delete().eq("user_id", userId),
          ]);
          return { ok: true };
        }
      }
    } catch (e) {
      console.warn("[applyMemoryServerOp] DB error, ignoring:", e);
      return { ok: true };
    }
  });
