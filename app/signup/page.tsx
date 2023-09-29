'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Messages from './messages';
import rio from "../images/rio.jpeg"
import Image from 'next/image';
import { Caveat, Montserrat } from 'next/font/google'
import SocialLogin from './SocialLogin';
import FormLoading from '@/components/FormLoading';


type AlertProps = {
  type: "info" | "error",
  msg: string
}
 

const cavet = Caveat({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

type Props = {}

export default function page({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AlertProps | undefined>(undefined);


  const router = useRouter()
  const supabase = createClientComponentClient()


  const handleSignUp = async () => {
    try {
      setLoading(true); 
      const {  error } =  await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (error) {
        setError({ type: 'error', msg: error.message }); 
        setLoading(false); 
        return;
      }
      router.push("/home")
    } catch (error) {
      console.error('Login failed', error);
      setError({ type: 'error', msg: 'An error occurred while getting you signed up' });
    }
  }



  return (
    <div className=" flex w-full px-8 sm:max-w-md justify-center overflow-hidden gap-2 bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${rio})`}}>
      <Image alt={" Hero Section"} src={rio} className='absolute object-cover w-full h-full' />
      <div className="absolute inset-0 bg-black opacity-25">
      </div>
      <div className="my-24 w-full flex flex-col items-center justify-center py-8  z-20 ">
        
        <Link href="/" className={`${cavet.className} h-8 text-4xl z-10 mb-2 text-foreground  w-auto`} >
          mytraveljournal.
        </Link>

        <h1 className={ `${montserrat.className} h-8 text-2xl z-10 mb-5 text-foreground  w-auto`}>Create an Account</h1>

            <div
              className="flex-1 flex flex-col w-full bg-white rounded-lg p-8 border-2 justify-center gap-2 text-foreground"
              // action="/auth/sign-up"
              // method="post"
            >

            <SocialLogin />
              <label className="text-md text-black" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-md px-4 py-2 border border-slate-400 text-black bg-slate-200 mb-6"
                name="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                required={true}
              />
              <label className="text-md text-black" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-md px-4 py-2 border border-slate-400 text-black bg-slate-200 mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button onClick={handleSignUp} disabled={loading}  className="bg-[#f25f14] rounded px-4 py-2 text-white mb-2">
              {loading ? (
              <div className="flex items-center justify-center">
                <FormLoading status={"Signing you up..."} /> 
              </div>
            ) : (
              'Register'
            )}
              </button>
              {error && (
                <p className="mt-4 p-3 bg-red-100 border-2 rounded-md border-red-700 text-red-700 text-center">
                  {error.msg}
                </p>
              )}
              <span
                // formAction="/auth/sign-up"
                className="rounded px-4 flex items-center justify-center text-black mb-2"
              >
                Have an account? <Link href="/login" className='text-[#f25f14] ml-1 '>Login</Link>
              </span>
              <Messages />
            </div>
      </div>
    </div>
  )
}

