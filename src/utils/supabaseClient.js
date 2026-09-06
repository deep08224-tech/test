import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safely create Supabase client only when valid environment credentials are provided
export const supabase =
  supabaseUrl && supabaseAnonKey && typeof supabaseUrl === "string" && supabaseUrl.startsWith("http")
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

