import DashHead from '@/components/DashHead'
import { Separator } from '@/components/ui/separator'
import React from 'react';
import { cookies } from "next/headers";
import JournalForm from './components/JournalForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';

type Props = {}

async function getUserId() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.log("Error has occured while getting UserId!");
    console.log("Error message : ", error.message);
    return null;
  }

  return session ? session.user.id : null;
}

export default async function WritePage({}: Props) {
  // const router = useRouter();
  const supabase = createServerComponentClient({cookies});
  const userId = await getUserId();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();


  if (!session) {
    // Redirect to the login page
    redirect('/login');
    // Return null or loading indicator, as the component won't render
    return null;
  }

  



  return (
    <div className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
      <DashHead title={"Create your journal"} subheading={"Write on your experinces exploring the many beautiful places in the world"} />
      <Separator />
      <JournalForm session={session} userId={userId} />
    </div>
  )
}