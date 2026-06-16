import { createFileRoute } from "@tanstack/react-router";
import { AccessAI } from "@/components/AccessAI";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/_authenticated/")({
  head: () => ({
    meta: [
      { title: "Access.AI — Voice & Vision Assistant" },
      {
        name: "description",
        content:
          "AI assistant for the visually impaired. Live camera scene description, voice Q&A, and a supervisor agent coordinating vision, memory, and speech.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AccessAI />
      <Toaster />
    </>
  );
}
