export type MemoryFact = {
  id: string;
  text: string;
  category: "person" | "place" | "routine" | "other";
  createdAt: number;
};

export type MemoryPreference = {
  id: string;
  text: string;
  createdAt: number;
};

export type MemoryTopic = {
  text: string;
  at: number;
};

export type MemoryStore = {
  preferences: MemoryPreference[];
  facts: MemoryFact[];
  topics: MemoryTopic[];
};

export const MEMORY_KEY = "access-ai-memory-v2";

export const emptyMemory = (): MemoryStore => ({
  preferences: [],
  facts: [],
  topics: [],
});

export function loadMemoryStore(): MemoryStore {
  if (typeof window === "undefined") return emptyMemory();
  try {
    const raw = window.localStorage.getItem(MEMORY_KEY);
    if (!raw) return emptyMemory();
    const parsed = JSON.parse(raw) as Partial<MemoryStore>;
    return {
      preferences: parsed.preferences ?? [],
      facts: parsed.facts ?? [],
      topics: parsed.topics ?? [],
    };
  } catch {
    return emptyMemory();
  }
}

export function saveMemoryStore(m: MemoryStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(MEMORY_KEY, JSON.stringify(m));
}

export function memoryToPromptBlock(m: MemoryStore): string {
  const lines: string[] = [];
  if (m.preferences.length) {
    lines.push("USER PREFERENCES:");
    for (const p of m.preferences) lines.push(`- ${p.text}`);
  }
  if (m.facts.length) {
    lines.push("KNOWN FACTS:");
    for (const f of m.facts) lines.push(`- [${f.category}] ${f.text}`);
  }
  if (m.topics.length) {
    const recent = m.topics
      .slice(-6)
      .map((t) => t.text)
      .join("; ");
    lines.push(`RECENT TOPICS: ${recent}`);
  }
  return lines.length ? lines.join("\n") : "(no memory yet)";
}

export function newId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function applyMemoryOp(m: MemoryStore, op: MemoryOp): MemoryStore {
  const next: MemoryStore = {
    preferences: [...m.preferences],
    facts: [...m.facts],
    topics: [...m.topics],
  };
  switch (op.type) {
    case "save_preference":
      if (!next.preferences.some((p) => p.text.toLowerCase() === op.text.toLowerCase())) {
        next.preferences.push({ id: newId(), text: op.text, createdAt: Date.now() });
      }
      break;
    case "save_fact":
      if (!next.facts.some((f) => f.text.toLowerCase() === op.text.toLowerCase())) {
        next.facts.push({
          id: newId(),
          text: op.text,
          category: op.category ?? "other",
          createdAt: Date.now(),
        });
      }
      break;
    case "forget":
      next.preferences = next.preferences.filter(
        (p) => !p.text.toLowerCase().includes(op.match.toLowerCase()),
      );
      next.facts = next.facts.filter((f) => !f.text.toLowerCase().includes(op.match.toLowerCase()));
      break;
    case "add_topic":
      next.topics.push({ text: op.text, at: Date.now() });
      if (next.topics.length > 20) next.topics = next.topics.slice(-20);
      break;
    case "clear":
      return emptyMemory();
  }
  return next;
}

export type MemoryOp =
  | { type: "save_preference"; text: string }
  | { type: "save_fact"; text: string; category?: MemoryFact["category"] }
  | { type: "forget"; match: string }
  | { type: "add_topic"; text: string }
  | { type: "clear" };
