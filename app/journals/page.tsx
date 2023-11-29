import React from 'react';
import DashHead from '@/components/DashHead';
import LocationCard from '@/components/LocationCard';


export default function JournalsPage() {
  return (
    <div className='border-2 border-red-400 gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Your Top News Feed"} subheading={"Here are some top suggestions of places to visit"} />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
    </div>
  )
}