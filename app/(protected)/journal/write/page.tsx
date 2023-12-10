import React from 'react';
import DashHead from '@/components/DashHead';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import JournalForm from './components/JournalForm';

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
  const userId = await getUserId();


  return (
    <div className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Create your journal"} subheading={"Write on your experinces exploring the many beautiful places in the world"} />
        <Separator />
        <JournalForm userId={userId} />
    </div>
  )
}