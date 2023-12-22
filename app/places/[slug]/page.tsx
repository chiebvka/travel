import React from 'react';
import Image from 'next/image';
import { getOgImageUrl, getUrl } from "@/lib/utils";
import { ArchiveIcon, Plane, ClockIcon } from "lucide-react";

import readingTime, { ReadTimeResults } from "reading-time";
import { format, parseISO } from "date-fns";
import { Journal, Place } from '@/types/collection';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from "next/navigation";
import { Separator } from '@/components/ui/separator';
import { seoData } from '@/config/main/seo';
import { Metadata } from 'next';
import { Category } from '../../../types/collection';

type Props = {}

interface PlacePageProps {
  params: {
    slug: string[];
  };
}


async function getPlace(params: { slug: string[] }) {
  const slug = params?.slug;
  const supabase = createServerComponentClient({ cookies })
  const response = await supabase
    .from("places")
    .select(
      `
      *,
      category_id:categories(id, name)
      `
    )
    .match({ slug: slug })
    .single<Place>();
  

  if (!response.data) {
    notFound;
  }
return response.data;
}


export async function generateMetadata({
  params,
}: PlacePageProps): Promise<Metadata> {
  try {
    
    const place = await getPlace(params);
    const truncateDescription =
      place?.description?.slice(0, 100) + ("..." as string);
    const slug = "/places/" + place?.slug;
  
    if (!place) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist"
    }
    }
    return {
      title: place.title,
      description: place.title,
      authors: {
        name: seoData.author.name,
        url: seoData.author.twitterUrl,
      },
      alternates: {
        canonical: `/places/${place.slug}`,
        languages : {
            'en-US': `/en-US/places/${place.slug}`,
            'fr-FR': `/fr-FR/places/${place.slug}`,
        }
      },
      openGraph: {
        title: place.title as string,
        description: place.title as string,
        type: "article",
        url: getUrl() + slug,
        images: [
          {
            url: getOgImageUrl(
              place.title as string,
              truncateDescription as string,
              [place.peak as string] as string[],
              slug as string,
            ),
            width: 1200,
            height: 630,
            alt: place.title as string,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: place.title as string,
        description: place.title as string,
        images: [
          getOgImageUrl(
            place.title as string,
            truncateDescription as string,
            [place.peak as string] as string[],
            slug as string,
          ),
        ],
      },
      robots: {
        index: true,     
        follow: true,
        nocache: true           
    } 
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist"
  }
  }
}



export default async function page({ params }: PlacePageProps) {

  const place = await getPlace(params);
  if (!place) {
    notFound();
  }

  const readTime = readingTime(place?.description ? place?.description : "");
 
  return (
    <div  className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
    <div className="w-full">
      <div className="w-full lg:mx-auto xl:mx-auto ">
        <div className="flex w-full mx-auto relative md:h-[35vh] h-[20vh] ">
            <Image className="w-full h-full object-cover border-2 border-primary rounded-lg" src={place?.imageLink || "/not-found.jpg"} fill alt='Mountain' />
        </div>
        {/** Post details header */}
        <div className="my-7 w-full md:w-10/12 mx-auto py-2 justify-center text-foreground grid grid-cols-2">
          <div className="flex space-x-2  border-gray-400 border-opacity-50 ">
            <p className="mt-0.5">
              <span className="sr-only">Seasons</span>
                <Plane
                  className="h-4 w-4 hidden md:block text-gray-400"
                  aria-hidden="true"
                />
            </p>
            <span className="text-xs md:text-sm">Best to visit during : <span className='text-primary'>{place?.peak}</span></span>
          </div>
          {/** Reading Time */}
          <div className="flex space-x-2 border-l border-gray-400 border-opacity-50 pl-3.5">
            <p className="mt-0.5">
              <span className="sr-only">Minutes to read</span>
              <ClockIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </p>
            <span className="text-xs md:text-sm">{readTime.text}</span>
          </div>
        </div>
        <Separator />
        {/** Post Deatils Footer */}
        <div className="grid w-full grid-cols-3 justify-start gap-4 rounded-md">
        </div>
        {/** Content */}
        <div className="relative mx-auto w-full text-sm md:text-base border-slate-500/50 px-2 py-5">
          <h1 className='text-3xl md:text-4xl capitalize font-bold mb-3 text-center'>{place?.title}</h1>
          <p className='font-light'>{place?.description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}