"use client"

import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
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
import { PiCaretUpDownBold } from "react-icons/pi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarX2Icon, CheckIcon, Loader2 as SpinnerIcon } from "lucide-react";
import toast from "react-hot-toast";
import { Separator } from '@/components/ui/separator';
import { AiOutlinePicture } from 'react-icons/ai';
import { journalFormSchema } from '@/lib/validation/journal';
import { useRouter } from 'next/navigation';
import { Journal } from '@/types/collection';
import { CreateJournal } from '@/actions/journals/createJournal';
import journalConfig from '@/config/protected/protected-post-config';
import { cn } from '@/lib/utils';
import { format } from "date-fns"
import { Calendar } from '@/components/ui/calendar';
import { v4 as uuidv4 } from 'uuid';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Textarea } from '@/components/ui/textarea';
import { PhotoIcon } from '@heroicons/react/24/outline';
import PlacesPage from '../../../places/page';
import { Label } from '@/components/ui/label';
import { getImageSize } from 'next/dist/server/image-optimizer';
import Image from 'next/image';


type JournalFormValues = z.infer<typeof journalFormSchema>;

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

interface Place {
  id: string;
  title: string;
}

interface JournalFormProps {
  session: any;
  userId: string | null; // Adjust the type accordingly
}

 

// ... (previous imports)

export default function JournalForm({ session, userId }: JournalFormProps) {
  const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
  const cdnurl = `https://${projectId}.supabase.co/storage/v1/object/public/journals/${userId}`
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const defaultValues: Partial<JournalFormValues> = {};

  const form = useForm<JournalFormValues>({
    resolver: zodResolver(journalFormSchema),
    defaultValues,
    mode: 'onChange',
  });


  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('places').select('');

        if (error) {
          console.error('Error fetching places:', error.message);
          toast.error(journalConfig.errorCreate);
          return;
        }

        if (data) {
          const placesData = data as unknown as Place[];
          const filteredPlaces = placesData.filter((place) => place.title && place.id);

          setPlaces(filteredPlaces);
        }
      } catch (error) {
        toast.error(journalConfig.errorCreate);
      }
    }
      async function getImages() {
    const { data, error } = await supabase
      .storage
      .from("journals")
      .list(userId + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" }
      })


      if(data !== null) {
        setImages(data)
      } else {
        toast.error("Error loading images")
      }
  }

    fetchData();
    getImages()
  }, []);





  async function onSubmit(datas: JournalFormValues) {
    setIsUpdating(true);
    const selectedPlace = places.find((place) => place.title === datas.place_id);
    const placeId = selectedPlace ? selectedPlace.id : null;

    const journalData = {
      title: datas.title || '',
      dov: datas.dov,
      experience: datas.experience || '',
      // places: datas.places || '',
      place_id: placeId || undefined,
      user_id: userId,


    };

    if (placeId) {
      journalData.place_id = placeId;
    }

    const response = await CreateJournal(journalData, userId);

    console.log(datas);

    if (response) {
      toast.success(journalConfig.successCreate);
      
      router.push(`/journals`);
    } else {
      toast.error(journalConfig.errorCreate);
    }

    setIsUpdating(false);
  }

  async function uploadImage(e: ChangeEvent<HTMLInputElement>) {
    setIsUpdating(true);
    let file = e.target.files && e.target.files[0];
  
    if (file) {
      try {
        const { data, error } = await supabase
          .storage
          .from("journals")
          .upload(userId + "/" + uuidv4(), file);
  
        if (data) {
          toast.success(journalConfig.imageSuccess);
          
          // Get the URL of the uploaded image
          const imageUrl = data.path ? `${cdnurl}/${data.path}` : '';

      
          // Set the image URL in your form or state, or wherever you need it
          form.setValue('imageUrl', imageUrl);

          // Add the uploaded image to the images state
          setImages([...images, data]);
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
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Your name' {...field} />
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
              name='imageUrl'
              render={({ field }) => (
                <FormItem className='col-span-full '>
                  <FormLabel>Cover Photo</FormLabel>
                  <FormControl>
                    <div className='mt-2 flex flex-col justify-center rounded-lg border border-dashed border-primary px-6 py-10'>
                      <div className="text-center">
                        <PhotoIcon className='mx-auto h-12 w-12 text-gray-300' aria-hidden='true' />
                        <Label htmlFor="picture" className='relative cursor-pointer rounded-md  font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'>
                        <span>Upload a file</span>
                        <Input id="picture" type="file" className='sr-only' onChange={(e) => uploadImage(e)}  />
                        </Label>
                        <p className='text-xs text-foreground pl-1'>or drag and drop</p>
                      </div>
                      <p className='text-xs text-foreground text-center leading-5 '>PNG, JPG, GIF up to 10MB</p>
                    </div>

                  </FormControl>
                </FormItem>
              )}
           />


          <FormField
            control={form.control}
            name='dov'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(' pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                      >
                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        <CalendarX2Icon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='place_id'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Language</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        role='combobox'
                        className={cn(' justify-between', !field.value && 'text-muted-foreground')}
                      >
                        {field.value
                          ? places.find((place) => place.title === field.value)?.title
                          : 'Select language'}
                        <PiCaretUpDownBold className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className=' p-0'>
                    <Command>
                      <CommandInput placeholder='Search language...' />
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {places.map((place) => (
                          <CommandItem
                            value={place.title}
                            key={place.title}
                            onSelect={() => {
                              form.setValue('place_id', place.title);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                'mr-2 h-4 w-4',
                                place.title === field.value ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {place.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>This is the language that will be used in the dashboard.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='experience'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Tell us a little bit about yourself'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations to link to them.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' disabled={isUpdating}>
            {journalConfig.submit}
          </Button>
        </form>
      </Form>
      <AlertDialog open={isUpdating} onOpenChange={setIsUpdating}>
        <AlertDialogContent className='font-sans'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center'>{journalConfig.pleaseWait}</AlertDialogTitle>
            <AlertDialogDescription className='mx-auto text-center'>
              <SpinnerIcon className='h-6 w-6 animate-spin' />
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}



