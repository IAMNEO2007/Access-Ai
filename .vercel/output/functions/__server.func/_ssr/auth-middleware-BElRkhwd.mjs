import { t as createMiddleware } from "./createStart-Dt05N14y.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-middleware-BElRkhwd.js
var DUMMY_USER_ID = "00000000-0000-0000-0000-000000000000";
var requireSupabaseAuth = createMiddleware({ type: "function" }).server(async ({ next }) => {
	const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
	const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) console.warn("[auth-middleware] Missing Supabase env vars — proceeding with bypassed auth.");
	const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
	return next({ context: {
		supabase: createClient(SUPABASE_URL || "https://dummy.supabase.co", SUPABASE_SERVICE_ROLE_KEY || SUPABASE_PUBLISHABLE_KEY || "dummy-key", { auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		} }),
		userId: DUMMY_USER_ID,
		claims: { sub: DUMMY_USER_ID }
	} });
});
//#endregion
export { requireSupabaseAuth as t };
