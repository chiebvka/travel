"use server"


import { journalDeleteSchema, journalFormSchema } from "@/lib/validation/journal";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import * as z from "zod";


export async function DeleteJournal(context: z.infer<typeof journalFormSchema>){
    try {
        const supabase = createServerComponentClient({ cookies })
        const journal = journalDeleteSchema.parse(context);
        const { data, error } = await supabase
        .from("journals")
        .delete()
        .match({id: journal.id})
        .select()

        revalidatePath("/journals")

if (error) {
    console.log(error);
    return false;
  }

  if (data && data.length > 0) {
    return true;
  }
  return false;
  return true;
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.log(error);
            return false;
          }
          return false;
    }
}