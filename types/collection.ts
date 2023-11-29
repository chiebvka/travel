import { Database } from "./supabase";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Journal = Database["public"]["Tables"]["journals"]["Row"];