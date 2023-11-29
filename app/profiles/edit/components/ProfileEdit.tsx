"use client"
import React, { FC, useState } from 'react';
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
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

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
import { Button } from "@/components/ui/button";
import { Loader2 as SpinnerIcon } from "lucide-react";

import { useRouter } from "next/navigation";
import Uppy from "@uppy/core";
import { DashboardModal } from "@uppy/react";
import Tus from "@uppy/tus";
import toast from "react-hot-toast";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import rio from "../../../../public/images/04.png";
import { profileFormSchema } from '@/lib/validation/profile';
import { Profile } from '@/types/collection';
import { createClient } from '@/utils/supabase/client';
import { UpdateSettings } from '@/actions/profile/updateSettings';
import { shimmer, toBase64 } from "@/lib/utils";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { AiOutlinePicture } from 'react-icons/ai';
import profileConfig from '@/config/protected/protected-profile-config';



  type Props = {}
  type ProfileFormValues = z.infer<typeof profileFormSchema>;

  interface ProfileProps {
    user: Profile;
  }
  



export default function ProfileEdit({user}: ProfileProps) {

    const router = useRouter();
    const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
    const cdnurl = `https://${projectId}.supabase.co/storage/v1/public/journals/[asset-name]`


    // Setup Uppy with Supabase
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    // const [avatarUrl, setAvatarUrl] = useState<string | null>(
    //   user.avatar_url || user.avatar_url !== "" ? user.avatar_url : null,
    // );



    // This can come from your database or API.
    const defaultValues: Partial<ProfileFormValues> = {
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      username: user.username || "",
      trade: user.trade || "",
    };

    // 1. Define your form.

    const form = useForm<ProfileFormValues>({
      resolver: zodResolver(profileFormSchema),
      defaultValues,
      mode: "onChange",
    });
  
    // 2. Define a submit handler.
    async function onSubmit(data: ProfileFormValues) {
      setIsUpdating(true);
  
      const response = await UpdateSettings({
        id: user.id,
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        trade: data.trade,
      });
  
      if (response) {
        toast.success(profileConfig.successMessage);
        router.push(`/profile/edit`);
      } else {
        toast.error(profileConfig.errorMessage);
      }
  
      setIsUpdating(false);
    }
  




    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-4 w-full'>
                  <div className="w-full md:px-10">
                    <div>
                      <div className="flex w-full mx-auto relative border-2 border-primary md:h-[35vh] h-[20vh] ">
                        <Image className="w-full h-full object-cover" src={rio} alt='Mountain' />
                      </div>
                      <div className="mx-auto md:w-32 md:h-32 w-24 h-24 relative -mt-12 md:-mt-16 ml-3 md:ml-5 border-4 border-white rounded-full overflow-hidden">
                          <Image  
                              className="w-full h-full object-cover" 
                              width={24}
                              height={24} 
                              src={rio} 
                              alt='avatar' 
                              priority
                          // placeholder={`data:image/svg+xml;base64,${toBase64(
                          // shimmer(96, 96),
                          // )}`}
                          />
                          
                      </div>
                      <div>
                        <div>   
                            <Button onClick={() => setShowModal(true)} className='mt-5'>
                              <AiOutlinePicture  className="mr-2 h-4 w-4" />
                              {profileConfig.changeAvatar}
                            </Button>
                            <p className="mt-2 text-xs leading-5 text-gray-500">
                            {profileConfig.uploadNote}
                            </p>
                            
                        </div>
                      </div>
                      <div className=" w-full  my-7 ">
                          <h2 className="font-semibold my-2 text-sm md:text-xl ">Edit Profile</h2>
                          <p className="text-sm text-muted-foreground">
                              Manage your account settings and set e-mail preferences.
                          </p>
                      </div>
                    </div>
                    <Separator />
                    <FormField 
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                            <FormLabel>{profileConfig.userName}</FormLabel>
                            <FormControl>
                                <Input placeholder={profileConfig.userNamePlaceholder} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display user name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                            <FormLabel>{profileConfig.firstName}</FormLabel>
                            <FormControl>
                                <Input placeholder={profileConfig.firstNamePlaceholder} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display first name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                            <FormLabel>{profileConfig.lastName}</FormLabel>
                            <FormControl>
                                <Input placeholder={profileConfig.lastNamePlaceholder} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display last name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="trade"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                            <FormLabel>{profileConfig.trade}</FormLabel>
                            <FormControl>
                                <Input placeholder={profileConfig.tradePlaceholder} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public occupation (i.e student, dveloper, architect, traveller, etc)
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isUpdating} className='my-5'>
                        {profileConfig.update}
                    </Button>
                  </div>
                </form>
            </Form>
            <AlertDialog open={isUpdating} onOpenChange={setIsUpdating}>
              <AlertDialogContent className="font-sans">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    {profileConfig.pleaseWait}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="mx-auto text-center">
                    <SpinnerIcon className="h-6 w-6 animate-spin" />
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
