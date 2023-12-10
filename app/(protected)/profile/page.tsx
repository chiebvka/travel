import React, { Suspense } from 'react';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import DashHead from '@/components/DashHead';
import rio from "../../../public/images/04.png";
import { Journal, Profile } from '@/types/collection';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import JournalLoading from '@/components/JournalLoading';
import LocationCard from '@/components/LocationCard';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import PersonalJournal from './components/PersonalJournal';

type Props = {}

const montserrat = Montserrat({ subsets: ["latin"] })

async function getUserId() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session }, error, } = await supabase.auth.getSession();
  
    if (error) {
      console.log("Error has occured while getting UserId!");
      console.log("Error message : ", error.message);
      return null;
    }
  
    return session ? session.user.id : null;
  }



export default async function page({}: Props) {
    const supabase = createServerComponentClient({ cookies })
    const userId = await getUserId();
    

    const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .match({ id: userId})
    .single<Profile>();

    if (error) {
        console.log(error);
        return notFound();
      }
    
      if (!data) {
        console.log("Couldn't find User profile.");
        return notFound();
      }

       // Fetch user journals
    const { data: journalsData, error: journalsError } = await supabase
    .from("journals")
    .select(   `
        *,
        place_id:places(id, title, peak)
    `)
    .match({ user_id: userId });

    if (journalsError) {
    console.log(journalsError);
    return notFound();
    }
      
  return (
    <div className='w-full md:max-w-6xl'>
        <DashHead title={"Edit your profile"} subheading={"Update your account settings. This is how others will see you on the site"} />
        <Separator />
        <div className="w-10/12 mx-auto mt-4">
            <div className="w-full ">
                {/** Cover image  */}
                <div className="flex w-full mx-auto relative h-[20vh]">
                    <div className="w-full ">
                        {data?.coverUrl ? (
                            <div className="w-full h-full">
                                <img src={data.coverUrl} alt="" className="w-full h-full object-cover border-2 border-primary" />
                            </div>
                        ) : (
                            <img className="w-full h-full object-cover" src={rio.src} alt='Mountain' />
                        )}
                    </div>       
                </div>
                {/** avatar image */}
                <div className="mx-auto md:w-32 md:h-32 w-24 h-24 relative -mt-8 md:-mt-12 ml-3 md:ml-5 border-4 border-primary rounded-full overflow-hidden">
                    <div className="w-full">
                        {data?.avatarUrl ? (
                            <div className="w-full h-full">
                                <img src={data.avatarUrl} alt="" className="w-full h-full object-cover border-2 border-primary" />
                            </div>
                        ) : (
                            <img className="w-full h-full object-cover" src={rio.src} alt='Mountain' />
                        )}
                    </div>
                </div>
                {/** Name */}
                <div className=" w-full mx-auto relative text-sm mt-8">
                    <div className='flex px-1 text-base my-4 font-bold'>Hi 👋🏽 ,{
                        data?.username ? (
                                <p className='pl-2'>{data.username}</p>
                            ) : (<p className='pl-2'>{data?.email}</p>
                            )
                        } 
                    </div>
                    <div className="flex">
                        {data?.trade ? (
                                <p className='pl-1 font-light'>{data.trade}</p>
                            ) : ( <p className='pl-2'></p> )
                        } 
                    </div>

                </div>
                <Separator />
            
                {/** Links */}
                <div className="flex my-4">
                    <Button asChild className='mx-2'>
                        <Link href="/profile/edit">Edit Profile</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/journal/write">Create a Post</Link>
                    </Button>
                </div>
                {/** Journals  */}
                <div className="">
                    {journalsData?.map((journal: Journal) => (
                            <Suspense key={journal.id} fallback={<JournalLoading />}>
                                <PersonalJournal journal={journal}  />
                            </Suspense>

                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}