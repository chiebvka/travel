"use server";

import { profileSchema } from "@/lib/validation/profile";
import { createClient } from "@/utils/supabase/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import * as z from "zod";

export async function editProfile(context: z.infer<typeof profileSchema>) {
  const supabase = createServerComponentClient({ cookies });
  try {
    const profile = profileSchema.parse(context);
    const { data, error } = await supabase
      .from("profiles")
      .update({
        username: profile.username,
        firstname: profile.firstname,
        lastname: profile.lastname,
        avatarUrl: profile.avatarUrl,
        coverUrl: profile.coverUrl,
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
