import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from './components/LoginForm';
import type { Metadata } from 'next';


export const metadata:Metadata = {
  title: 'Travel Journal App',
  description: 'Login to travel journal',
}


export default async function Login() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser();


  user && redirect("/");
  
  return (
    <div className=" flex w-full  px-8 sm:max-w-md justify-center  overflow-hidden gap-2" >
        <div className="w-full md:mt-56  block md:my-auto  py-12 z-20 ">
          <LoginForm />
        </div>
    </div>
  )
}
