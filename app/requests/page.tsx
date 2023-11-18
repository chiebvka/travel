import React from 'react';

import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({ subsets: ['latin']})

type Props = {}

export default function page({}: Props) {
  return (
    <div className='border-2 px-4 border-red-400 w-full mt-4 min-h-screen overflow-auto relative text-foreground bg-background flex flex-col items-center'>
        <div className="flex flex-col items-start md:items-center md:w-9/12 md:mx-auto p-5 justify-center ">
            <p className={`${montserrat.className} font-bold md:text-2xl`}>Need a feature added?</p>
            <p className={`${montserrat.className} text-sm font-light md:text-base`}>Leave a request for some features you might want to see added to this project </p>
        </div>
    </div>
  )
}