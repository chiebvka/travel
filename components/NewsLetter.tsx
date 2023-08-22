import React from 'react';
import rio from "../app/images/rio.jpeg";
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ weight: '400', subsets: ["latin"] })

type Props = {}

export default function NewsLetter({}: Props) {
  return (
    <div className='relative h-[38vh]  w-full overflow-hidden'>
        <Image alt={" Hero Section"} src={rio} className='absolute object-cover w-full h-full' />
        <div className="absolute inset-0 bg-black opacity-75">
        </div>
        <div className="text-foreground z-100  relative w-full  px-6 py-28 md:py-36 mx-auto md:px-12 xl:py-40 ">
          <div className="h-screen flex items-center justify-center ">
            <div className="flex h-full flex-col  items-center mb-4 ">
              <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
              <p className={`${montserrat.className} md:text-2xl lg:text-[40px] font-bold !leading-tight mx-auto w-full lg:max-w-3xl text-white text-center mb-6 lg:my-12`}>
              <strong>Subscribe to our newsletter</strong> 
              </p>
            <p className={`${montserrat.className} md:text-xl lg:text-[20px] font-light lg:font-normal !leading-tight mx-auto w-full lg:max-w-3xl text-white text-center mb-7 lg:mb-12`}>
                Stay up to date with our amazing location suggestions and many others
              </p>
            <form action="#" className='w-full '>
              <div className="items-center mx-auto mb-3 flex  md:space-y-1 p-1 md:p-3  bg-white rounded-full w-full sm:max-w-screen-sm sm:flex ">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div> */}
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-transparent dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#f25f14] dark:focus:border-[#f25f14" placeholder="Enter your email address" type="email" id="email" required={true} />
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-full border cursor-pointer bg-[#f25f14] border-primary-600  sm:rounded-full hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              {/* <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div> */}
            </form>
            </div>

          </div>
        </div>
        NewsLetter
    </div>
  )
}