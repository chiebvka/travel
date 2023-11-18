import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rio from "@/app/images/rio.jpeg";
import { Montserrat } from 'next/font/google';
import LoadButton from './LoadButton';

const montserrat = Montserrat({ subsets: ["latin"] })

type Props = {}

export default function Locations({}: Props) {
  return (
    <div className='w-full mt-4 ' >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-12 gap-y-4   w-full px-4 ">
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
            <div className="flex group flex-col">
                <div className="flex w-full my-4 md:my-0 mx-auto relative h-full  rounded-lg">               
                    <Image src={rio} alt="" className='w-full h-full object-cover transition duration-300 ease-in-out  group-hover:scale-110 rounded-lg' />
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold pb-3 line-clamp-1 `}>Visited my home town in Imo State, Nigeria</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam id provident ex nemo saepe rem sit nihil eos impedit?</p>
                </div>
                <button type="button" className='flex flex-start my-6' >
                    <Link href="/"className="px-5 py-2.5 mr-2  border-2 border-foreground rounded-lg p-3 hover:opacity-60">
                    Learn More
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}