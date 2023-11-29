import React from 'react'
import Messages from '@/app/signup/messages'
import Link from 'next/link'
import rio from "../../../public/images/04.png";
import { Caveat, Montserrat } from 'next/font/google'
import Image from 'next/image'
import ProfileEdit from './components/ProfileEdit';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from "next/headers";
import { Profile } from '@/types/collection';
import { notFound } from 'next/navigation';
import toast from 'react-hot-toast';
import { createClient } from '@/utils/supabase/server';




const cavet = Caveat({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })



// async function getUserId() {
//     const cookieStore = cookies();
//     const supabase = createClient(cookieStore)
//     const { data: user } = await supabase.auth.getUser();
//     const { data: profile, error} = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("id", user.user?.id)



//     if (error) {
//         console.log("Error has occured while getting UserId!");
//         console.log("Error message : ", error.message);
//         return null;
//       }
    
//       return user;
// }




type Props = {}

export default async function page({}: Props) {
     
    const supabase = createServerComponentClient({cookies});

    const { data: user } = await supabase.auth.getUser();


    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.user?.id)
        .single<Profile>();


    if (error) {
        console.log(error);
        throw Error;
    }

    if (!data) {
        notFound;
        toast.error("Cound't find User profile.");
    }

    console.log(data)

  return (
    <div  className='text-white w-full mx-auto border-2  border-purple-600 '>
        <div className=" px-4 md:px-0 w-11/12 mx-auto">
            <div className="w-full lg:mx-auto xl:mx-auto ">

                    <ProfileEdit user={data} />
            </div>
        </div>    
    </div>
  )
}