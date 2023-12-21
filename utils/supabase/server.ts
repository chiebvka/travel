import { Journal } from "@/types/collection";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};

export async function getJournal(params: { slug: string[] }) {
  const slug = params?.slug;
  const supabase = createServerComponentClient({ cookies })
  const response = await supabase
  .from("journals")
  .select(`
        *,
        place_id:places(id, title, peak),
        user_id(avatarUrl, trade, username)
        `)
  .match({ slug: slug })
  .single<Journal>();
return response.data;
}

