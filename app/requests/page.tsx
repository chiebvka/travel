"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Montserrat } from 'next/font/google';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import toast from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
import {
Form,
FormControl,
FormField,
FormDescription,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 as SpinnerIcon } from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';


const montserrat = Montserrat({ subsets: ['latin']})

interface FormData {
  name: string;
  email: string;
  request: string;
}


type Props = {}

export default function page({}: Props) {
  const supabase = createClientComponentClient()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    request: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    setIsUpdating(true);
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('requests')
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        request: '',
      });

      // Handle success (e.g., show a confirmation message)
      toast.success('Message submitted successfully:');
    } catch (error: any) {
      toast.error(error.message as string);
    }
    setIsUpdating(false);
  };
    
    useEffect(() => {
      if (error) {
        // Handle and display the error to the user
        console.error('Error:', error);
      }
    }, [error]);


  return (
    <div className='px-4  w-full  md:max-w-6xl mt-4 min-h-screen overflow-auto relative text-foreground bg-background flex flex-col items-center'>
        <div className="flex flex-col items-start md:items-center md:w-9/12 md:mx-auto p-5 justify-center ">
            <p className={`${montserrat.className} font-bold md:text-2xl`}>Need a feature added?</p>
            <p className={`${montserrat.className} text-sm font-light md:text-base`}>Leave a request for some features you might want to see added to this project </p>
        </div>
        <Separator />
        <div className="flex mt-12 w-full">
          <div className="mb-12 w-full md:w-10/12 mx-auto ">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6" >
              <label
                  className=""
                  htmlFor="name">Name
                </label>
                <input 
                  type="text"
                  className="peer mt-4 block min-h-[auto] border border-primary  w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="name" 
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
        
              </div>
              <div className="relative mb-6" >
              <label
                  className=""
                  htmlFor="email">Email address
                </label>
                <input 
                  type="email"
                  className="peer mt-4 block min-h-[auto] w-full rounded border border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="email"
                  required 
                  placeholder='Your email'
                  value={formData.email}
                  onChange={handleChange}
                />
    
              </div>
              <div className="relative mb-6" >
              <label htmlFor="request"
                  className="">Leave your feature requests below...</label>
                <textarea
                  className="peer mt-4 block min-h-[auto] w-full rounded border border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="request" 
                  rows={5} 
                  placeholder="Leave a comment..."
                  value={formData.request}
                  onChange={handleChange}
                ></textarea>

              </div>
              <Button type="submit" disabled={isUpdating}>
                Send Message
              </Button>
            </form>
            <AlertDialog open={isUpdating} onOpenChange={setIsUpdating}>
              <AlertDialogContent className='font-sans'>
                <AlertDialogHeader>
                  <AlertDialogTitle className='text-center'>Submitting your request</AlertDialogTitle>
                  <AlertDialogDescription className='mx-auto text-center'>
                    <SpinnerIcon className='h-6 w-6 animate-spin' />
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
    </div>
  )
}