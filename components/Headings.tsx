import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Navbar from './Navbar'
import UserNavigation from './UserNavigation'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle';

type Props = {}

export default async function Headings({}: Props) {
  const supabase = createServerComponentClient({ cookies })


  const {
      data: { user },
    } = await supabase.auth.getUser()
  
  return (
    <div className=' flex justify-between bg-transparent z-20 w-11/12 lg:w-full mx-auto'>
    <Navbar />
    <div className="flex lg:flex-1 mr-3 mt-2 lg:justify-end">
      {user ? (
        <UserNavigation />

      ) : (
        <div className="flex gap-2.5">
          <Button asChild>
            <Link
              href="/login"
              className=""
            >
              Login
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link
              href="/signup"
              className=""
            >
              SignUp
            </Link>
          </Button>
        </div>
      )}
    </div>
    <ModeToggle />
  </div>
  )
}