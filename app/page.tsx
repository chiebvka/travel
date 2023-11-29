import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'
import MobileNavigation from '@/components/MobileNavigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import { Freehand } from 'next/font/google';
import { Architects_Daughter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import Buttons from '@/components/Buttons'
import Image from 'next/image'
import rio from "./images/rio.jpeg"
import vacay from "./images/vacay1.jpeg"
import map from "./images/mapa.jpeg";
import guides from "./images/mapc.jpeg";
import HeroForm from '@/components/HeroForm'
import Sections from '@/components/Sections'
import Masonry from '@/components/Masonry'
import NewsFeed from '@/components/NewsFeed'
import SwipeShow from '@/components/SwipeShow'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'
import MasonryMobile from '@/components/MasonryMobile'
import { Suspense } from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import UserNavigation from '@/components/UserNavigation'


export const dynamic = 'force-dynamic'

const obitron = Architects_Daughter({ weight: '400', subsets: ["latin"] })
const montserrat = Montserrat({  subsets: ["latin"] })


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Guide', href: '/' },
    { name: 'Place', href: '/' },
    { name: 'Plan', href: '/' },
  ]




  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <Suspense >

      <div className="w-full flex  flex-col relative items-center">
        {/* Hero Section & Nvigation bar */}
        
        <div className=" relative h-[100vh] -mt-24 w-full overflow-hidden ">
          <Image alt={" Hero Section"} src={rio} className='absolute object-cover w-full h-full' />
          <div className="absolute inset-0 bg-black opacity-25">
          </div>
          <div className="text-foreground z-100  relative w-full flex items-center justify-center px-2 mx-auto my-auto md:px-4  py-40 xl:py-40 ">
            <div className="h-screen flex items-center justify-center ">
              <div className="flex h-full flex-col  items-center mb-4 ">
                <p className={`${montserrat.className} text-xl text-white md:text-[56px] transition  font-medium lg:text-[84px] md:font-bold !leading-tight mx-auto max-w-lg md:max-w-3xl text-center my-6 md:my-12`}>
                <strong>Amazing Travel { ' '}
                  Experiences</strong> 
                </p>
              <p className={`${montserrat.className} text-base flex text-white lg:text-xl font-light md:font-normal md:!leading-tight mx-auto max-w-lg md:max-w-3xl text-center mb-6 md:mb-8 lg:mb-12`}>
                  We got you covered with the best destination <br /> for your next travel
                </p>
                <div className=' md:bg-background  rounded-3xl mt-12  w-full md:p-8'>
                  <HeroForm />
                
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="animate-in flex flex-col gap-14 opacity-0 w-full md:max-w-6xl px-3 py-16 lg:py-24 text-foreground">
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="flex">
              <Sections className={"flex flex-col-reverse "} imagery={vacay} imagingAlt={"Photograph of a family on vacation"} title={"Why My Travel Journal?"} description={"My travel journal is a platform aimed to help users with the right information for their next travel. It allows users share their thoughts and experiences of their trip around the world"} link={"Get Started"} url={"/"}  />
            </div>
            <div className="flex">
              <Sections className={"flex mt-3 flex-col-reverse md:flex-row-reverse"} imagery={map} imagingAlt={"Photograph of a guide map"} title={"Destination Guide"} description={"Having issues in finding rthe location for your next trip? We got you covered by providing you with all the information you need for easy navigation to your destination"} link={"Learn More"} url={"/"}  />
            </div>




            {/** Grid Layout */}

            
            <div className=' mt-4 '>
              <div className="flex flex-col">
                <h1 className="md:text-4xl text-xl font-bold flex items-start justify-center mb-3">
                    Top Suggestions for Your Next Travel
                </h1>
                <p className="md:text-xl text-base font-light md:font-normal flex items-start justify-center mt-3 md:mt-6">
                    We provide the best travel experince
                </p>
              </div>
              <div className='hidden  md:grid grid-cols-3 mt-12 gap-5'>
                <Masonry imagery={map} imagingAlt={"Photograph of a family on vacation"} title={"Paris France"} description={"Offers combination of beautiful scenary, a standard pool, zoo ..."}  url={"/"} className={' col-span-2 h-64 '} />
                <Masonry imagery={rio} imagingAlt={"Photograph of a family on vacation"} title={"Sydney Opera House Australia"} description={"It is often regarded as one of the most famous and distinctive buildings..."}  url={"/"} className={' row-span-2 '} />
                <Masonry imagery={guides} imagingAlt={"Photograph of a family on vacation"} title={"Geirangerfjorld, Norway"} description={"Your perfect blend for excitment and tourism"}  url={"/"} className={' row-span-2'} />
                <Masonry imagery={map} imagingAlt={"Photograph of a family on vacation"} title={"Calabar Nigeria"} description={"Best for kids and paremts"}  url={"/"} className={' h-48 '} />
                <Masonry imagery={vacay} imagingAlt={"Photograph of a family on vacation"} title={"Ile-Ife Osun, Nigeria"} description={"Allows you to see the beauty of Nigeria and amazing local dishes..."}  url={"/"} className={' h-64 col-span-2'} />
              </div>
              <div className="flex md:hidden">
                <MasonryMobile imagery={map} imagingAlt={"Photograph of a family on vacation"} title={"Paris France"} description={"Offers combination of beautiful scenary, a standard pool, zoo ..."} url={'/'} className={''} />
              </div>
              <div className="flex  w-full">
                <div className="flex w-full items-center justify-center mt-12 mx-auto">
                  <div className="flex items-center  py-2 px-5 rounded no-underline bg-[#f25f14] text-white hover:bg-btn-background-hover">
                    <button  className="mr-2">Search</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
                </div>
              </div>
            </div>


            {/** News Feed Layout */}
            <div className=" mt-4 ">
              <div className="flex flex-col">
                <h1 className="md:text-4xl text-xl font-bold flex items-start justify-center mb-3">
                    Our News Feed
                </h1>
                <p className="md:text-xl text-base font-light flex md:items-start items-center justify-center px-4 md:mt-4">
                    Now share your thoughts and hear from other about their experience
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 px-3 gap-5">
                <NewsFeed imagery={guides} imagingAlt={"Photograph of a family on vacation"} title={"Visited my home town in Imo State, Nigeria"} description={"So excited to visit my parents here in Imo State, Nigeria. Love the view, food and had a nice time with old school friends and what not "} url={"/"} cityName={"Imo, Nig"} className={''} />
                <NewsFeed imagery={vacay} imagingAlt={"Photograph of a family on vacation"} title={"A trip with the family to the United States"} description={"So i decided to take my family on a vacation in the US. It has been an amazing experince so far"} url={"/"} cityName={"New York"} className={''} />
                <NewsFeed imagery={guides} imagingAlt={"Photograph of a family on vacation"} title={"Now in South Africa with friends for our PhD"} description={"Just arrived with my friends to South Africa for our PhD. Already spent one week and it's been wonderful so far "} url={"/"} cityName={"South Africa"} className={''} />
              </div>
              <div className="flex mt-8 md:mt-12 w-full">
                <div className="flex w-full items-center justify-center  mx-auto">
                  <Link href="/" className="flex items-center  py-2 px-8 md:px-5 rounded no-underline bg-[#f25f14] text-white hover:bg-btn-background-hover">
                    View More
                </Link>
                </div>
              </div>
            </div>


            {/** Planning Trip */}
            <div className="flex">
              <Sections className={""} imagery={vacay} imagingAlt={"Photograph of a family on vacation"} title={"Plan Your Next Travel "} description={"Set reminders and learn about the location for your next travel"} link={"Learn More"} url={"/"}  />
            </div>


            {/** Heros Review Section */}
            <div className="">
              <div className="flex flex-col">
                <h1 className="md:text-4xl text-xl font-bold flex items-start justify-center mb-3">
                    Hear What Our Users Say
                </h1>
                <p className="md:text-xl text-base font-normal flex items-start justify-center mt-4">
                    Below are some users comments about us 
                </p>
              </div>
              <div className="flex  p-3 relative   mt-5">
                <SwipeShow imagery={undefined} imagingAlt={undefined} title={undefined} description={undefined} reviewer={undefined} className={''} />
              </div>
            </div>-+
            
        </div>

        <NewsLetter />
        
      </div>
    </Suspense>
  )
}
