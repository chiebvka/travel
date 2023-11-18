import React from 'react';
import rio from "../app/images/rio.jpeg";
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Input } from './ui/input';
import { Button } from './ui/button';
const montserrat = Montserrat({ weight: '400', subsets: ["latin"] })

type Props = {}

export default function NewsLetter({}: Props) {
  return (
    <div className='relative  h-[40vh] w-full overflow-hidden'>
        <Image alt={" Hero Section"} src={rio} className='absolute object-cover w-full h-full' />
        <div className="absolute inset-0 bg-black opacity-75">
        </div>
        <div className="text-foreground z-100   relative w-full flex items-center justify-center py-12  px-6   mx-auto md:px-12 ">
          <div className="h-screen flex items-center justify-center ">
            <div className="flex h-full flex-col  items-center mb-4 ">
              <p className={`${montserrat.className} md:text-2xl lg:text-[40px] font-bold !leading-tight mx-auto w-full lg:max-w-3xl text-white text-center mb-6 `}>
              <strong>Subscribe to our newsletter</strong> 
              </p>
            <p className={`${montserrat.className} md:text-xl text-base font-normal !leading-tight mx-auto w-full lg:max-w-3xl text-white text-center mb-7 lg:mb-12`}>
                Stay up to date with our amazing location suggestions and many others
              </p>
            <form action="#" className='w-full '>
              <div className="flex w-full  items-center space-x-2">
                <Input type="email" placeholder="Enter your email address" />
                <Button type="submit">Subscribe</Button>
              </div>
              {/* <div className="items-center mx-auto mb-3 flex  md:space-y-1 p-1 md:p-3  bg-white rounded-full w-full sm:max-w-screen-sm sm:flex ">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg  border-none sm:rounded-none sm:rounded-l-lg  focus:ring-transparent focus:border-primary-500 outline-transparent outline-0 " placeholder="Enter your email address" type="email" id="email" required={true} />
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-full border cursor-pointer bg-[#f25f14] border-primary-600  sm:rounded-full hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div> */}
            
            </form>
            </div>

          </div>
        </div>
        NewsLetter
    </div>
  )
}