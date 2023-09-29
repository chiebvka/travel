'use client'
import React from 'react'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin']})

type Props = {title: any, subheading: any}
// 
export default function DashHead(props: Props) {
    const {title, subheading } = props 
  return (
    <div className=' w-full '>
        <div className="flex flex-col items-start md:items-center md:w-9/12 md:mx-auto p-5 justify-center ">
            <p className={`${montserrat.className} font-bold md:text-2xl`}>{title}</p>
            <p className={`${montserrat.className} text-sm font-light md:text-base`}>{subheading} </p>
        </div>
        <div className="flex justify-end  ">
            <div className="pt-2  mr-4 relative mx-auto text-foreground">
                <input className=" bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}