'use client'

import React,{ useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Messages from '../messages';
import FormLoading from '@/components/FormLoading';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Caveat, Montserrat } from 'next/font/google'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';



type Props = {};
type AlertProps = {
  type: "info" | "error",
  msg: string
}


const cavet = Caveat({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })


export default function LoginForm({}: Props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AlertProps | undefined>(undefined);

  const router = useRouter();
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();

  const message = searchParams.get('message')

  const handleSignIn = async () => {
    try {
      setLoading(true); 

      const {  error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError({ type: 'error', msg: error.message }); 
        setLoading(false); 
        return;
      }

        router.push('/');
        router.refresh()
    } catch (error) {
      console.error('Login failed', error);
      setError({ type: 'error', msg: 'An error occurred while logging in.' });
    }
  }


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
    <Card className='bg-foreground text-background'>
      <CardHeader className="space-y-1 flex  items-center justify-center">
        <CardTitle className={`${cavet.className} text-4xl text-primary `}>mytraveljournal.</CardTitle>
        <CardDescription>
          Enter your login details below to log  into your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-6">
          {/* <SocialLogin /> */}
          <Button variant="outline" onClick={() => signInWithFacebook()} className='flex items-center justify-center  text-primary border bg-foreground p-4 hover:bg-accent hover:text-accent-foreground border-primary '>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg> 
          </Button>
          <Button variant="outline" onClick={() => signInWithGoogle()}  className='flex items-center justify-center  text-primary border bg-foreground p-4 hover:bg-accent hover:text-accent-foreground border-primary '>
            <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </Button>
          <Button variant="outline" onClick={() => signInWithLinkedIn()} className='flex items-center justify-center  text-primary border bg-foreground p-4 hover:bg-accent hover:text-accent-foreground border-primary '>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-foreground px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            name="email"
            placeholder="you@example.com"
            className='bg-foreground'
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required={true}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password"
            name="password"
            className='bg-foreground'
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSignIn}  disabled={loading} className="w-full">
          {loading ? (
            <div className="flex items-center justify-center">
              <FormLoading status={"Logging in..."} /> 
            </div>
          ) : (
            'Login'
          )}
        </Button>
      </CardFooter>
      <div className="my-5">
        {error && (
          <p className="my-4 p-3 bg-red-100 border-2 rounded-md border-red-700 text-red-700 text-center">
            {error.msg}
          </p>
        )}
        <span
          className="rounded md:px-4 flex items-center text-xs justify-center  mb-2"
        >
          Don't have an account? <Link href="/signup" className='text-primary ml-1 '>Sign Up</Link>
        </span>
        <Messages />
      </div>
    </Card>
  )
}