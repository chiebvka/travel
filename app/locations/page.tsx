import DashHead from '@/components/DashHead'
import Footer from '@/components/Footer'
import LoadButton from '@/components/LoadButton'
import LocationCard from '@/components/LocationCard'
import Locations from '@/components/Locations'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='text-foreground w-9/12  absolute right-0'>
      <DashHead title={"Top Suggestions for your next travel "} subheading={"We provide with the best travel experience"} />
      <Locations />
      <LoadButton content={'Learn More'} />
      <Footer />
    </div>
  )
}