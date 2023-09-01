'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'

type Props = {}

export default function SocialLogin({}: Props) {
    const supabase = createClientComponentClient()
    async function signInWithFacebook() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'facebook',
        })
      }
      async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
        })
      }
    
    
      async function signInWithLinkedIn() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'linkedin',
        })
      }
  return (
    <div  className="flex flex-col items-center justify-center gap-[18px]">
        <div className="flex mt-4 space-x-5  sm:mt-0">
        <a href="#" onClick={() => signInWithFacebook()} className="text-[#f25f14] hover:text-foreground dark:hover:text-white border rounded-full p-3 border-[#f25f14] flex itesm-center justify-center ">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg> 
        </a>
        <a href="#" onClick={() => signInWithGoogle()} className="text-[#f25f14] hover:text-foreground dark:hover:text-white border rounded-full p-3 border-[#f25f14] flex itesm-center justify-center ">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
        </svg>
        </a>
        <a href="#" onClick={() => signInWithLinkedIn()} className="text-[#f25f14] hover:text-foreground dark:hover:text-white border rounded-full p-3 border-[#f25f14] flex itesm-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        </a>
        </div>
    </div>
  )
}