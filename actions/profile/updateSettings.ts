"use server";

import { profileSchema } from "@/lib/validation/profile";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import * as z from "zod";

export async function UpdateSettings(context: z.infer<typeof profileSchema>) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const profile = profileSchema.parse(context);
    const { data, error } = await supabase
      .from("profiles")
      .update({
        username: profile.username,
        firstname: profile.firstname,
        lastname: profile.lastname,
        avatar_url: profile.avatarUrl,
        trade: profile.trade,
      })
      .eq("id", profile.id);

    if (error) {
      console.log(error);
      return false;
    }
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      return false;
    }
    return false;
  }
}
