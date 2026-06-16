import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    // Bypassing auth — use a valid UUID matching the server-side dummy user
    return { user: { id: "00000000-0000-0000-0000-000000000000", email: "dummy@example.com" } };
  },
  component: () => <Outlet />,
});
