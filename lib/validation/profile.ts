import * as z from "zod";

export const profileFormSchema = z.object({
  firstname: z
    .string()
    .min(2, {
      message: "First Name must be at least 2 characters.",
    }),
  lastname: z
    .string()
    .min(2, {
      message: "Last Name must be at least 2 characters.",
    }),
  username: z.string().optional(),
  avatarUrl: z.string().optional(),
  trade: z.string().optional(),
});

export const profileSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string().optional(),
  avatarUrl: z.string().optional(),
  trade: z.string().optional(),
});
