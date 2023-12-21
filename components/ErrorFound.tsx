import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

export default function ErrorFound({}: Props) {
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex w-full ">
            <img src="/40401.svg" alt="" className='w-full' />
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-12">Page Not Found</p>
            <p className="md:text-lg lg:text-xl text-foreground mt-8">Sorry, the page you are looking for could not be found.</p>
            <Button className="  mt-10 rounded-lg hover:opacity-75 transition duration-150" >
                <Link href="/" className='flex space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Return Home</span>
                </Link>
            </Button>
        </div>
    </div>
</>
  )
}