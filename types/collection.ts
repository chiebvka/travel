import { Database } from "./supabase";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Journal = Database["public"]["Tables"]["journals"]["Row"];
export type Place = Database["public"]["Tables"]["places"]["Row"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];


