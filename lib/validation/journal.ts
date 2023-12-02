import * as z from "zod";

export const journalFormSchema = z.object({
    title: z.string().min(2, {
            message: "Title must be at least 2 characters.",
        }),
    dov: z.date({
        required_error: "A date of visit is required"
    }),
    place_id: z.string({
        required_error: "Please select where you visited from the list"
    }).optional(),
    experience: z.string().min(6, {
        message: "Your experince should span a minimum of 6 characters.",
    }),
    imageUrl: z.string().url().optional(),
})

export const profileSchema = z.object({
    title: z.string(),
    dov: z.date(),
    place_id: z.string(),
    user_id:z.string().optional(),
    imageUrl: z.string().url().optional(),
    experience: z.string(),
})