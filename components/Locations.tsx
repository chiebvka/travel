import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google';
import { Place } from '@/types/collection';

const montserrat = Montserrat({ subsets: ["latin"] })

type Props = {
    place: Place;
  }

export default function Locations({place}: Props) {

 

  return (
        <div className="flex group h-[400px] flex-col">
            <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                <Image 
                    src={place?.imageLink || ""} 
                    alt={place?.slug || ""}                          
                    fill={true}
                    blurDataURL='blur'
                    className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
            </div>
            <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>{place?.title}</h1>
            <div className="flex mt-5">
                <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>{place?.description}</p>
            </div>
            <button type="button" className='flex flex-start my-6' >
                <Link href={`/places/${place?.slug}`} className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                </Link>
            </button>
        </div>
  )
}