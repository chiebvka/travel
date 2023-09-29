import DashHead from '@/components/DashHead'
import Footer from '@/components/Footer'
import LoadButton from '@/components/LoadButton'
import LocationCard from '@/components/LocationCard'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';
import React from 'react'

type Props = {}

export default async function page({}: Props) {
  const supabase =   createServerComponentClient({ cookies })
  const { data: {session}} = await supabase.auth.getSession()
  if(!session) {
    redirect("/login")
  }
  return (
    <div className='text-foreground w-9/12  absolute right-0'>
      <DashHead title={"Yout Top News Feed"} subheading={"Here are some top suggestions of places to visit"} />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LoadButton content={'Learn More'} />
      <Footer />
    </div>
  )
}

