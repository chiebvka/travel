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
import { CalendarX2Icon, CheckIcon, SparklesIcon, Loader2 as SpinnerIcon } from "lucide-react";
import toast from "react-hot-toast";
import { journalFormSchema } from '@/lib/validation/journal';
import { useRouter } from 'next/navigation';
import { CreateJournal } from '@/actions/journals/createJournal';
import journalConfig from '@/config/protected/protected-post-config';
import { cn } from '@/lib/utils';
import { format } from "date-fns"
import { Calendar } from '@/components/ui/calendar';
import { v4 as uuidv4 } from 'uuid';
import slugify from "react-slugify";

import { parse } from 'date-fns';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Textarea } from '@/components/ui/textarea';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { Label } from '@/components/ui/label';
import { getImageSize } from 'next/dist/server/image-optimizer';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { Journal } from '../../../../../types/collection';
import { UpdateJournal } from '@/actions/journals/updateJournal';

type JournalFormValues = z.infer<typeof journalFormSchema>;

interface Place {
    id: string;
    title: string;
  }
  
interface JournalFormProps {
  // session: any;
  journal: Journal;
  userId: string | null; // Adjust the type accordingly
}

type Props = {}

export default function EditJournal({  userId, journal }: JournalFormProps) {
  const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
  const cdnurl = `https://${projectId}.supabase.co/storage/v1/object/public/journals`
  const router = useRouter();
  const supabase = createClientComponentClient();



  const [places, setPlaces] = useState<Place[]>([]);
  const [images, setImages] = useState<any[]>([]);
  
  const [content, setContent] = useState<string | null>(journal?.content || null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  
  // const [error, setError] = useState<string | null>(null);
  
  const defaultValues: Partial<JournalFormValues> = {
    title: journal?.title || '',
    slug: journal?.slug || '',
    dov: journal?.dov ? parse(journal.dov, 'yyyy-MM-dd', new Date()) : undefined,
    place_id: journal?.place_id?.title || '',
    imageUrl: journal?.imageUrl || '',
    experience: journal?.experience || '',
    

    
  };
  // const [showModal, setShowModal] = useState<boolean>(false);

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
    .list('', {
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

  getImages();
  fetchData();
}, [userId]);



async function onSubmit(datas: JournalFormValues) {
  setIsUpdating(true);
  const selectedPlace = places.find((place) => place.title === datas.place_id);
  const placeId = selectedPlace ? selectedPlace.id : null;

  const journalData = {
    id: journal?.id,
    title: datas.title || '',
    dov: datas.dov,
    experience: datas.experience || '',
    slug: datas.slug || '',
    place_id: placeId || undefined,
    user_id: userId,
    imageUrl: datas.imageUrl,


  };

  if (placeId) {
    journalData.place_id = placeId;
  }

  const response = await UpdateJournal(journalData, userId);
  console.log('UpdateJournal response:', response);


  if (response) {
    toast.success(journalConfig.successUpdate);
    
    router.push(`/profile`);
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
        .upload(userId + "/" + uuidv4(), file)
        cacheControl: '3600' 
        contentType: file.type
        dangerouslyAllowSVG: true

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
        toast.error("Error uploading image");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading the image");
    }
  }

  setIsUpdating(false);
}

const getImageNameFromUrl = (imageUrl: string): string => {
  const parts = imageUrl.split('/');
  return parts[parts.length - 1];
};

const deleteImage = async (imageName: string) => {
  setIsUpdating(true);
  try {
    const { error } = await supabase
      .storage
      .from("journals")
      .remove([userId + "/" + imageName]);

    if (error) {
      toast.error("Could not delete image");
    } else {
      // Remove the deleted image from the images state
      const updatedImages = images.filter((image) => image.name !== imageName);
      setImages(updatedImages);

      toast.success("Image deleted successfully");
    }
     // Refresh the page after successful deletion
     window.location.reload();
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the image");
  }
  setIsUpdating(false);
};


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
          name='slug'
          render={({ field }) => (
              <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                  <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormDescription>
                <Button
                  type="button"
                  size="sm"
                  className="mt-2"
                  onClick={() =>
                    field.onChange(slugify(form.getValues("title")))
                  }
                >
                  <SparklesIcon className="mr-2 h-4 w-4" />
                  Click to generate slug
                </Button>
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
                      <Label htmlFor="picture" className='relative cursor-pointer rounded-md  font-semibold text-primary '>
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
              name='imageUrl'
              render={({ field }) => (
                  <FormItem className='col-span-full'>
                  <FormLabel>Selected Image</FormLabel>
                  <FormControl>
                      {field.value && (
                      <div className='mt-2 border-2 border-dashed border-primary rounded-lg relative '>
                          <Image alt='' src={field.value} width={100} height={100} className='md:w-1/5 w-full object-cover h-44 border-2' />
                          {/* <span className='border-2 border-primary absolute bottom-0 left-2 text-primary rounded-full text-3xl '>
                          <MdDelete /> delete
                          </span> */}
                          <Button className='mt-2'  disabled={isUpdating} onClick={() => field.value && deleteImage(getImageNameFromUrl(field.value))} 
                          variant="destructive">Delete Image</Button>
                      </div>
                      )}

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
          {journalConfig.update}
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
  )
}