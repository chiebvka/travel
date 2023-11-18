import React from 'react'
import Messages from '@/app/signup/messages'
import Link from 'next/link'
import rio from "@/app/images/rio.jpeg";
import { Caveat, Montserrat } from 'next/font/google'
import Image from 'next/image'




const cavet = Caveat({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

type Props = {}

export default function page({}: Props) {
  return (
    <div  className='text-white w-full border-2  border-purple-600 '>
        <div className="border-2 border-white w-full">
            <div className="w-full lg:mx-auto xl:mx-auto ">
                <div className="flex w-full mx-auto relative md:h-[35vh] h-[20vh] ">
                    <Image className="w-full h-full object-cover" src={rio} alt='Mountain' />
                </div>
                <div className="mx-auto md:w-32 md:h-32 w-24 h-24 relative -mt-12 md:-mt-16 ml-3 md:ml-5 border-4 border-white rounded-full overflow-hidden">
                    <Image  className="w-full h-full object-cover" src={rio} alt='Woman looking front' />
                </div>
                <div className=" ml-3 md:ml-7 mt-3">
                    <h2 className="font-semibold text-sm md:text-xl ">Edit Profile</h2>
                </div>
                <div  className=" ml-3 md:mx-7  flex flex-col items-center justify-center py-8 z-20 ">
                    <form
                    className="flex-1 flex flex-col w-full bg-white rounded-lg p-8 border-2 justify-center gap-2 text-foreground"
                    action="/auth/sign-up"
                    method="post"
                    >


                    <label className="text-md text-black" htmlFor="email">
                        Name
                    </label>
                    <input
                        className="rounded-md px-4 py-2 border border-slate-400 text-black bg-slate-200 mb-6"
                        name="username"
                        placeholder="Name"
                        required
                    />
                    <label className="text-md text-black" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md px-4 py-2 border border-slate-400 text-black bg-slate-200 mb-6"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-md text-black" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 border border-slate-400 text-black bg-slate-200 mb-6"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <button className="bg-primary rounded px-4 py-2 text-white mb-2">
                        Update Profile
                    </button>
                    <Messages />
                    </form>
                </div>
            </div>
        </div>    
    </div>
  )
}