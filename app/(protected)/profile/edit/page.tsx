import React from 'react';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from 'next/navigation';
import { Profile } from '@/types/collection';
import DashHead from '@/components/DashHead';
import { Separator } from '@/components/ui/separator';
import ProfileForm from '../components/ProfileForm';
import type { Metadata } from 'next';

// Make another page that allows for profile editing

export const metadata:Metadata = {
  title: 'Travel Journal App',
  description: 'Profile',
}

type Props = {}

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
  .match({ id: userId })
  .single<Profile>();

  if (error) {
    console.log(error);
    throw Error;
  }

  if (!data) {
    notFound;
    console.log("Cound't find User profile.");
  }



  return (
    <div className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
          <DashHead title={"Edit your profile"} subheading={"Update your account settings. This is how others will see you on the site"} />
          <Separator />
          <ProfileForm user={data} />
    </div>
  )
}