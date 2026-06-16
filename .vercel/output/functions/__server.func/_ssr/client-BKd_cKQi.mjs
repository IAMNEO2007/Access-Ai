import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-BKd_cKQi.js
function createSupabaseClient() {
	return createClient("https://itomvwwkggidlkxrqcpt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0b212d3drZ2dpZGxreHJxY3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNzM4NjgsImV4cCI6MjA5Njk0OTg2OH0.MgR9zRwnwSaU8DN24Fuv3kLKGa_Im_7LLTKsbNFMs-0", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
