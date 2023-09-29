import Image from 'next/image'
import React from 'react'
import rio from "@/app/images/rio.jpeg";
import LocationCard from '@/components/LocationCard';
import Footer from '@/components/Footer';
import LoadButton from '@/components/LoadButton';
import Link from 'next/link';

type Props = {}

export default function page({}: Props) {
  return (
    <div  className='text-foreground w-9/12 absolute right-0'>
        <div className=" w-full">
            <div className="w-full lg:mx-auto xl:mx-auto ">
                <div className="flex w-full mx-auto relative md:h-[35vh] h-[20vh] ">
                    <Image className="w-full h-full object-cover" src={rio} alt='Mountain' />
                </div>
                <div className="mx-auto md:w-32 md:h-32 w-24 h-24 relative -mt-12 md:-mt-16 ml-3 md:ml-5 border-4 border-white rounded-full overflow-hidden">
                    <Image  className="w-full h-full object-cover" src={rio} alt='Woman looking front' />
                </div>
                <div className=" ml-3 md:ml-7 mt-8">
                    <h2 className="font-semibold text-sm md:text-xl ">Sarah Smith</h2>
                    <p className="text-gray-500 text-sm md:text-xl mt-2">Freelance Web Designer</p>
                </div>
                <div className="py-4 md:ml-7 flex justify-between w-full md:w-1/4 mt-2">
                    <Link href="/profile/edit">
                        <button className=" block rounded-lg bg-gray-900 hover:shadow-lg font-semibold text-xs md:text-base text-white px-6 py-2">Edit Profile</button>
                    </Link>
                    <Link href="/">
                        <button className=" block rounded-lg bg-gray-900 hover:shadow-lg font-semibold text-xs md:text-base text-white px-6 py-2">Write Post</button>
                    </Link>
                </div>
                <div className=" ml-3 md:ml-7">
                    <h2 className="font-bold text-2xl">My Posts</h2>
                </div>
            </div>
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </div>
        <LoadButton content={"View More"} />
        <Footer />
    </div>
  )
}