"use server"

import { journalFormSchema } from "@/lib/validation/journal";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import * as z from "zod";


export async function CreateJournal(context: z.infer<typeof journalFormSchema>, userId: string | null) {
    try {
        const supabase = createServerComponentClient({ cookies })
        const journal = journalFormSchema.parse(context);
        const { data, error } = await supabase
            .from("journals")
            .insert({
                title: journal.title,
                dov: journal.dov,
                // places: journal.places,
                place_id: journal.place_id, 
                imageUrl: journal.imageUrl,
                user_id: userId,
                experience: journal.experience
            })

            revalidatePath("/journals")

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
