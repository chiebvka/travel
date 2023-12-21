import React from 'react';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Journal } from '@/types/collection';
import { notFound } from 'next/navigation';
import DashHead from '@/components/DashHead';
import { Separator } from '@/components/ui/separator';
import JournalForm from '../write/components/JournalForm';
import EditJournal from './components/EditJournal';

type Props = {}

interface PostPageProps {
  params: {
    id: string;
  };
}

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


async function getJournal(id: string, userId: string) {
  const supabase = createServerComponentClient({ cookies })
  const response = await supabase
  .from("journals")
  .select(`
        *,
        place_id:places(id, title, peak),
        user_id(avatarUrl, trade, username)
        `)
  .match({ id: id, user_id: userId })
  .single<Journal>();

  if (!response.data) {
    notFound;
  }
return response.data;
}



export default async function page({ params }: PostPageProps) {
  const userId = await getUserId();
  const journal = await getJournal(params.id, userId || "");

  if (!journal) {
    notFound();
  }
  return (
    <div className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Create your journal"} subheading={"Write on your experinces exploring the many beautiful places in the world"} />
        <Separator />
        <EditJournal userId={userId} journal={journal} />
    </div>
  )
}