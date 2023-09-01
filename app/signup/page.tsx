
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Messages from './messages';
import rio from "../images/rio.jpeg"
import { url } from 'inspector';
import Image from 'next/image';
import { Caveat, Montserrat } from 'next/font/google'
import SocialLogin from './SocialLogin';




const cavet = Caveat({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

type Props = {}

export default function page({}: Props) {
  const supabase = createServerComponentClient({ cookies })


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
  async function signout() {
    const { error } = await supabase.auth.signOut()
  }
    


  return (
    <div className=" flex w-full px-8 sm:max-w-md justify-center overflow-hidden gap-2 bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${rio})`}}>
      <Image alt={" Hero Section"} src={rio} className='absolute object-cover w-full h-full' />
      <div className="absolute inset-0 bg-black opacity-25">
      </div>
      <div className="my-24 w-full flex flex-col items-center justify-center py-8  border-2 border-red-600 z-20 ">
        
        <Link href="/" className={`${cavet.className} h-8 text-4xl z-10 mb-2 text-white  w-auto`} >
          mytraveljournal.
        </Link>

        <h1 className={ `${montserrat.className} h-8 text-4xl z-10 mb-5 text-white  w-auto`}>Create Account</h1>

            <form
              className="flex-1 flex flex-col w-full bg-white rounded-lg p-8 border-2 justify-center gap-2 text-foreground"
              action="/auth/sign-up"
              method="post"
            >

            <SocialLogin />

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
              <button className="bg-[#f25f14] rounded px-4 py-2 text-white mb-2">
                Sign Up
              </button>
              <span
                // formAction="/auth/sign-up"
                className="rounded px-4 flex items-center justify-center text-black mb-2"
              >
                Have an account? <Link href="/login" className='text-[#f25f14] ml-1 '>Login</Link>
              </span>
              <Messages />
            </form>
      </div>
    </div>
  )
}

