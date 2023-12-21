import React from 'react';
import DashHead from '@/components/DashHead';
import Locations from '@/components/Locations';
import type { Metadata } from 'next';


export const metadata:Metadata = {
  title: 'Travel Journal App - Top PLaces',
  description: 'Most journaled places',
}

type Props = {}

export default function PlacesPage({}: Props) {
  return (
    <div className='border-2 border-red-400 w-full mt-4 px-4 min-h-screen overflow-auto relative text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Top Suggestions for your next travel"} subheading={"We provide with the best travel experience"} />
        <div className="w-10/12 mx-auto">
          <Locations />
        </div>
    </div>
  )
}