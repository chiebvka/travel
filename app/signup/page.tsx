
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignupForm from "./components/SignupForm";



export default async function page() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser();


  user && redirect("/");


  return (
    <div className=" flex w-full  px-8 sm:max-w-md justify-center  overflow-hidden gap-2" >
      <div className="w-full md:mt-56  block md:my-auto  py-12 z-20 ">
        <SignupForm />
      </div>
  </div>
  )
}

