'use client'
import React, { useEffect, useState } from "react";
import DashHead from '@/components/DashHead';
import Footer from '@/components/Footer'
import LoadButton from '@/components/LoadButton'
import LocationCard from '@/components/LocationCard'
import Locations from '@/components/Locations';
import rio from "@/app/images/rio.jpeg";
import { Montserrat } from 'next/font/google'
import Image from 'next/image';


const montserrat = Montserrat({ subsets: ['latin']})

type Props = {}

export default function page({}: Props) {
  


  return (
    <div className='text-foreground w-9/12 absolute right-0'>
      <div className='w-full '>
        <div className="flex flex-col items-start md:items-center md:w-9/12 md:mx-auto p-5 justify-center ">
            <p className={`${montserrat.className} font-bold md:text-2xl`}>Plan your next travel </p>
            <p className={`${montserrat.className} text-sm font-light md:text-base`}>Set Reminders and learn about the locations of your next travel </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full my-4 md:my-8 mx-auto relative h-[40vh]  rounded-lg">               
            <Image src={rio} alt="" className='w-full h-full object-cover rounded-lg' />
        </div>
        <form className="flex-1 flex flex-col w-full  rounded-lg p-8 border-2 justify-center gap-2 text-foreground">
          <label className="text-md font-bold text-foreground" htmlFor="email">
            Destination
          </label>
          <select id="countries"  defaultValue={"DEFAULT"}  className="bg-gray-50 border my-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={"DEFAULT"}>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <label htmlFor="message" className="block my-4 text-md font-bold  text-foreground">Brief Summary about what your trip is about</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          <label htmlFor="message" className="block my-4 text-md font-bold  text-foreground">Number of Days</label>
          <input type="number" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='12 days' />
          <label htmlFor="message" className="block my-4 text-md font-bold  text-foreground">Date of Travel</label>

          {/* <div className="relative max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>

</div> */}
            <input type="date" name="" id="" className="block  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />

            <LoadButton content={"Set Reminder"} />

        </form>
      </div>
      <Footer />
    </div>
  )
}