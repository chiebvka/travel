'use client'
import React, { useState } from 'react'
import { Caveat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import  {FaBarsProgress}  from 'react-icons/fa6'
import { AiOutlineHome } from 'react-icons/ai'
import { RiGuideFill } from 'react-icons/ri'
import { GrNavigate } from 'react-icons/gr'
import { BsCalendarDate } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { BiSupport, BiLogIn } from 'react-icons/bi'
import { MdOutlineAccountCircle } from 'react-icons/md'
import rio from "@/app/images/rio.jpeg"
import { Dialog } from '@headlessui/react';
import LogoutButton from './LogoutButton';



const cavet = Caveat({ subsets: ['latin'] })

type Props = {}

export default function Sidebar({}: Props) {

  const navigation = [
    { name: 'Home', href:"/", icon: '/' },
    { name: 'Guide', href:"/", icon: '/' },
    { name: 'Place', href:"/", icon: '/' },
    { name: 'Plan', href:"/", icon: '/' },

  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [collapseUpper, setCollapseUpper] = React.useState(false);

  const handleCollapse = () => {
    setCollapseUpper(!collapseUpper);
  };


  return (
    <div className="flex  transition duration-200 delay-150 ease-in-out">

      <div className={collapseUpper ? 'w-8/12 fixed z-40 left-0 top-0 transition duration-200 delay-150 ease-in-out  bg-[#003f5f] px-5 py-4 h-full text-foreground ' : ' fixed z-40 left-0 top-0 md:w-3/12 w-3/12 transition duration-200 delay-150 ease-in-out bg-[#003f5f]  px-5 py-4 h-full text-foreground '}>
        <div className="flex justify-between w-full transition duration-200 delay-150 ease-in-out  items-center ">
          <Link href="/home" className={collapseUpper ? `${cavet.className} text-2xl block font-extrabold text-foreground ` : ` ${cavet.className} text-2xl hidden md:block font-extrabold text-foreground `} >mytraveljournal</Link>
          <FaBarsProgress size="25px" className='md:hidden flex justify-center items-center' onClick={handleCollapse}  />
        </div>
        <Link href="/" className="border-2 mt-4 flex bg-slate-300 rounded-lg p-3">
          <Image
            width={8}
            height={8}
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-4"
            src={rio}
            alt=""
          />
          <p className={collapseUpper ? "text-base text-slate-800 flex": "text-base text-slate-800 hidden md:flex" }>Oreo P.</p>
        </Link>
        <div className=" mt-4" > 
          <Link href="/home" className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <AiOutlineHome className='mr-2 ' size={collapseUpper ? '25px': '27px'}/>
            <span   className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Home</span>
          </Link>
          <Link href="/locations" className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <RiGuideFill className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Guide</span>
          </Link>
          {/* <Link href="/" className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <GrNavigate className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Home</span>
          </Link> */}
          <Link href="/plan"  className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <BsCalendarDate className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Schedule</span>
          </Link>
          <Link href="/profile" className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <MdOutlineAccountCircle className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Profile</span>
          </Link>
          <Link href="/" className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <FiSettings className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Settings</span>
          </Link>
          <Link href="/" className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <BiSupport className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}>Support</span>
          </Link>
          <div  className='flex justify-start my-7  items-center hover:opacity-50 transition duration-100 delay-75 ease-in-out '>
            <BiLogIn className='mr-2 ' size={collapseUpper ? '25px': '27px'} />
            <span className={collapseUpper ? 'mr-1 text-xl' :'text-xl ml-2 font-light hidden md:flex'}><LogoutButton/></span>
          </div>
        </div>
      </div>
    </div>
  )
}