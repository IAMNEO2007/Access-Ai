import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
type StoredMessage = {
  id: string;
  role: string;
  parts: JsonValue[];
};

export const loadConversation = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    try {
      let { data: conv } = await supabase
        .from("conversations")
        .select("id")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (!conv) {
        const { data: created, error } = await supabase
          .from("conversations")
          .insert({ user_id: userId, title: "Conversation" })
          .select("id")
          .single();
        if (error) {
          console.warn("[loadConversation] Could not create conversation:", error.message);
          // Return a local-only conversation ID so the UI still works
          return { conversationId: crypto.randomUUID(), messages: [] };
        }
        conv = created;
      }
      const { data: rows, error: msgErr } = await supabase
        .from("messages")
        .select("id, role, parts, created_at")
        .eq("conversation_id", conv.id)
        .order("created_at", { ascending: true });
      if (msgErr) {
        console.warn("[loadConversation] Could not load messages:", msgErr.message);
        return { conversationId: conv.id as string, messages: [] };
      }
      const messages: StoredMessage[] = (rows ?? []).map((r) => ({
        id: r.id as string,
        role: r.role as string,
        parts: (r.parts ?? []) as JsonValue[],
      }));
      return { conversationId: conv.id as string, messages };
    } catch (e) {
      console.warn("[loadConversation] DB unavailable, using local-only mode:", e);
      return { conversationId: crypto.randomUUID(), messages: [] };
    }
  });

export const saveMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((input: { conversationId: string; message: StoredMessage }) =>
    z
      .object({
        conversationId: z.string().uuid(),
        message: z
          .object({
            id: z.string(),
            role: z.string(),
            parts: z.array(z.any()),
          })
          .passthrough(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    try {
      const { error } = await supabase.from("messages").upsert(
        {
          id: data.message.id,
          conversation_id: data.conversationId,
          user_id: userId,
          role: data.message.role,
          parts: data.message.parts,
        },
        { onConflict: "id" },
      );
      if (error) {
        console.warn("[saveMessage] DB error:", error.message);
      }
    } catch (e) {
      console.warn("[saveMessage] DB unavailable:", e);
    }
    return { ok: true };
  });

export const clearConversation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((input: { conversationId: string }) =>
    z.object({ conversationId: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    try {
      const { error } = await supabase
        .from("messages")
        .delete()
        .eq("conversation_id", data.conversationId);
      if (error) {
        console.warn("[clearConversation] DB error:", error.message);
      }
    } catch (e) {
      console.warn("[clearConversation] DB unavailable:", e);
    }
    return { ok: true };
  });
