"use client"

import React, { ChangeEvent, FC, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import rio from "../../../../public/images/04.png";
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
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { AiOutlinePicture } from 'react-icons/ai';
import { Button } from "@/components/ui/button";
import { Loader2 as SpinnerIcon } from "lucide-react";
import { Profile } from '@/types/collection';
import profileConfig from '@/config/protected/protected-profile-config';
import { profileFormSchema } from '@/lib/validation/profile';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Avatar } from '@/components/ui/avatar';
import { editProfile } from '@/actions/profile/editProfile';
import { PencilSquareIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Label } from '@/components/ui/label';

type Props = {}
type ProfileFormValues = z.infer<typeof profileFormSchema>;
interface ProfilFormProps {
    user: Profile
}

export default function ProfileForm({user}: ProfilFormProps) {
  const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
  const avatarurl = `https://${projectId}.supabase.co/storage/v1/object/public/avatar/`
  const coverurl = `https://${projectId}.supabase.co/storage/v1/object/public/cover/`
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [images, setImages] = useState<any[]>([]);
  const [avatar, setAvatar] = useState<any[]>([]);
  const [cover, setCover] = useState<any[]>([])
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const defaultValues: Partial<ProfileFormValues> = {
    username: user.username || "",
    firstname: user.firstname|| "",
    lastname: user.lastname|| "",
    trade: user.trade|| "",
    avatarUrl: user?.avatarUrl || "",
    coverUrl: user?.coverUrl || "",


    
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });


  async function onSubmit(data: ProfileFormValues) {
    try {
      setIsUpdating(true);

      const profileData = {
        id: user.id,
        username: data?.username || "",
        firstname: data?.firstname || "",
        lastname: data?.lastname || "",
        trade: data?.trade || "",
        avatarUrl: data?.avatarUrl,
        coverUrl: data?.coverUrl,
      }

      const response = await editProfile(profileData);

      if(response) {
        toast.success(profileConfig.successMessage);
      } else {
        toast.error(profileConfig.errorMessage)
      }


    } catch (error) {
      toast.error(profileConfig.errorMessage)
    }

    setIsUpdating(false);
  }

  async function uploadAvatar(e: ChangeEvent<HTMLInputElement>) {
    setIsUpdating(true);
    let file = e.target.files && e.target.files[0];
  
    if (file) {
      try {
        const { data, error } = await supabase
          .storage
          .from("avatar")
          .upload(user?.id + "/" + uuidv4(), file)
          cacheControl: '3600' // You can adjust cache control based on your needs
          contentType: file.type // Set the content type based on the selected file
          dangerouslyAllowSVG: true
  
        if (data) {
          toast.success(profileConfig.successMessageImageUpload);
          
          // Get the URL of the uploaded image
          const avatarUrl = data.path ? `${avatarurl}/${data.path}` : '';

      
          // Set the image URL in your form or state, or wherever you need it
          form.setValue('avatarUrl', avatarUrl);
          console.log(avatarUrl)

          // Add the uploaded image to the images state
          setAvatar([...avatar, data]);
        } else {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    setIsUpdating(false);
  }
  

  async function uploadCover(e: ChangeEvent<HTMLInputElement>) {
    setIsUpdating(true);
    let file = e.target.files && e.target.files[0];
  
    if (file) {
      try {
        const { data, error } = await supabase
          .storage
          .from("cover")
          .upload(user?.id + "/" + uuidv4(), file)
          cacheControl: '3600' // You can adjust cache control based on your needs
          contentType: file.type // Set the content type based on the selected file
          dangerouslyAllowSVG: true
  
        if (data) {
          toast.success(profileConfig.successMessageImageUpload);
          
          // Get the URL of the uploaded image
          const coverUrl = data.path ? `${coverurl}/${data.path}` : '';

      
          // Set the image URL in your form or state, or wherever you need it
          form.setValue('coverUrl', coverUrl);
          console.log(coverUrl)

          // Add the uploaded image to the images state
          setCover([...cover, data]);
        } else {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    setIsUpdating(false);
  }




  return (
    <div className='w-10/12 border'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
          <div className="w-full space-y-8">
              {/** Cover Image Section */}
              <div className="flex w-full mx-auto relative  h-[20vh] ">
              <FormField
                control={form.control}
                name='coverUrl'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    {/* <FormLabel>Selected Image</FormLabel> */}
                    <FormControl>
                      {field.value ? (
                        <div className='w-full h-full'>
                          <img alt='Cover Photo' src={field.value} width={100} height={100} className="w-full h-full object-cover border-2 border-primary"  />
                        </div>
                      ) : (
                        <Image className="w-full h-full object-cover" src={rio} alt='Mountain' /> 
                      )
                    }

                    </FormControl>
                  </FormItem>
                )}
                />
                <div className="absolute bottom-2  right-4">
                  <FormField
                      control={form.control}
                      name='coverUrl'
                      render={({ field }) => (
                        <FormItem className=' '>
                          <FormControl>
                            <div className='mt-2 flex  justify-center p-2 bg-transparent rounded-full border border-dashed border-primary '>
                                <Label htmlFor="picture" className='relative flex cursor-pointer rounded-md  font-semibold text-primary'>
                                <PencilSquareIcon className='mx-auto h-8 w-8 text-primary' aria-hidden='true' />
                                {/* <span className='border-dashed border-primary my-auto flex items-center text-foreground justify-center'>Chage cover Photo</span> */}
                                <Input id="picture" type="file" className='sr-only' onChange={(e) => uploadCover(e)}  />
                                </Label>
                            </div>

                          </FormControl>
                        </FormItem>
                      )}
                  />
                </div>
              </div>

              {/** Avatar Section */}
              <div>
                <div className="mx-auto md:w-32 md:h-32 w-24 h-24 relative -mt-16 md:-mt-20 ml-3 md:ml-5 border-4 border-primary rounded-full overflow-hidden">
                  <FormField
                    control={form.control}
                    name='avatarUrl'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        {/* <FormLabel>Selected Image</FormLabel> */}
                        <FormControl>
                          {field.value ? (
                            <div className='w-full h-full'>
                              <img alt='avatar' src={field.value} width={100} height={100} className="w-full h-full object-cover border-2 border-primary"  />
                            </div>
                          ) : (
                            <Image className="w-full h-full object-cover" src={rio} alt='Mountain' /> 
                          )
                        }

                        </FormControl>
                      </FormItem>
                    )}
                    />
                </div>
                <div>
                <div className="mt-5">
                    <FormField
                        control={form.control}
                        name='avatarUrl'
                        render={({ field }) => (
                          <FormItem className='md:w-1/6 '>
                            <FormControl>
                              <div className='mt-2 flex  justify-center p-2 bg-primary rounded-lg border border-dashed border-primary '>
                                  <Label htmlFor="avatar" className='relative flex cursor-pointer rounded-md  font-semibold text-primary'>
                                  <PhotoIcon className='mx-auto mr-2 h-5 w-5 text-gray-300' aria-hidden='true' />
                                  <span className='border-dashed border-primary my-auto flex items-center text-foreground justify-center'>Chage avatar</span>
                                  <Input id="avatar" type="file" className='sr-only' onChange={(e) => uploadAvatar(e)}  />
                                  </Label>
                              </div>

                            </FormControl>
                          </FormItem>
                        )}
                    />
                </div>
              </div>
              </div>
              <div className=" w-full  my-7 ">
                  <h2 className="font-semibold my-2 text-sm md:text-xl ">Edit Profile</h2>
                  <p className="text-sm text-muted-foreground">
                      Manage your account settings and set e-mail preferences.
                  </p>
              </div>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your username' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name that will be displayed on your profile and in emails.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your Last name' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name that will be displayed on your profile and on yur posts
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='firstname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your First name' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name that will be displayed on your profile and on yur posts
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='trade'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trade</FormLabel>
                    <FormControl>
                      <Input placeholder='Your trade' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is what you do such as student, developer, nurse etc
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
 
          </div>
          <Button type='submit' disabled={isUpdating}>
            {profileConfig.update}
          </Button>
        </form>
      </Form>
      <AlertDialog open={isUpdating} onOpenChange={setIsUpdating}>
        <AlertDialogContent className='font-sans'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>{profileConfig.pleaseWait}</AlertDialogTitle>
            <AlertDialogDescription className='mx-auto text-center'>
              <SpinnerIcon className='h-6 w-6 animate-spin' />
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}