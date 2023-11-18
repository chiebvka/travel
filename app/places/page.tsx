import React from 'react';
import DashHead from '@/components/DashHead';
import Locations from '@/components/Locations';

type Props = {}

export default function PlacesPage({}: Props) {
  return (
    <div className='border-2 border-red-400 w-full mt-4 px-4 min-h-screen overflow-auto relative text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Top Suggestions for your next travel"} subheading={"We provide with the best travel experience"} />
        <Locations />
    </div>
  )
}