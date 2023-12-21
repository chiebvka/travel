import React from 'react';
import Image from 'next/image';
import rio from "@/app/images/rio.jpeg";
import Link from 'next/link';
import { getOgImageUrl, getUrl } from "@/lib/utils";
import { ArchiveIcon, CalendarIcon, ClockIcon } from "lucide-react";
import readingTime, { ReadTimeResults } from "reading-time";
import { format, parseISO } from "date-fns";
import { Journal } from '@/types/collection';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from "next/navigation";
import { Separator } from '@/components/ui/separator';
import { seoData } from '@/config/main/seo';
import { Metadata } from 'next';

type Props = {}

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getJournal(params: { slug: string[] }) {
  const slug = params?.slug;
  const supabase = createServerComponentClient({ cookies })
  const response = await supabase
  .from("journals")
  .select(`
        *,
        place_id:places(id, title, peak),
        user_id(avatarUrl, trade, username)
        `)
  .match({ slug: slug })
  .single<Journal>();

  if (!response.data) {
    notFound;
  }
return response.data;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  try {
    
    const journal = await getJournal(params);
    const truncateDescription =
      journal?.description?.slice(0, 100) + ("..." as string);
    const slug = "/journals/" + journal?.slug;
  
    if (!journal) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist"
    }
    }
    return {
      title: journal.title,
      description: journal.title,
      authors: {
        name: seoData.author.name,
        url: seoData.author.twitterUrl,
      },
      alternates: {
        canonical: `/journals/${journal.slug}`,
        languages : {
            'en-US': `/en-US/journals/${journal.slug}`,
            'fr-FR': `/fr-FR/journals/${journal.slug}`,
        }
      },
      openGraph: {
        title: journal.title as string,
        description: journal.title as string,
        type: "article",
        url: getUrl() + slug,
        images: [
          {
            url: getOgImageUrl(
              journal.title as string,
              truncateDescription as string,
              [journal.categories?.title as string] as string[],
              slug as string,
            ),
            width: 1200,
            height: 630,
            alt: journal.title as string,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: journal.title as string,
        description: journal.title as string,
        images: [
          getOgImageUrl(
            journal.title as string,
            truncateDescription as string,
            [journal.place_id?.title as string] as string[],
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

export default async function page({ params }: PostPageProps) {


  const journal = await getJournal(params);
  if (!journal) {
    notFound();
  }
  const readTime = readingTime(journal?.experience ? journal?.experience : "");


  return (
    <div  className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
      <div className="w-full">
        <div className="w-full lg:mx-auto xl:mx-auto ">
          <div className="flex w-full mx-auto relative md:h-[35vh] h-[20vh] ">
              <Image className="w-full h-full object-cover border-2 border-primary rounded-lg" src={journal.imageUrl || "/not-found.jpg"} fill alt='Mountain' />
          </div>
          {/** Post details header */}
          <div className="my-7 w-11/12 md:w-10/12 mx-auto py-2 justify-center text-foreground grid grid-cols-2 md:grid-cols-4">
            {/** Author */}

            <div  className="mb-5 flex flex-row items-start justify-start pr-3.5 md:mb-0">
              <Image height={28} width={28} src={journal?.user_id?.avatarUrl || "/not-found.jpg"} alt='author_avatar'   className="flex h-[26px] w-[26px] border border-primary rounded-full object-cover shadow-sm"  priority  />
              <div className="ml-2 flex ">
                <span className="text-sm items-center justify-center flex font-semibold ">
                  Junior Boy
                </span>
              </div>
            </div>
            {/** Date */}
            <div  className="flex space-x-2 border-gray-400 border-opacity-50 pl-0 pr-3.5 md:border-l md:pl-3.5">
              <p className='mt-0.5'>
                <span className="sr-only">Date</span>
                <CalendarIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </p>
              <span className="text-sm">{format(parseISO(journal?.created_at!), "MMMM dd, yyyy")} </span>
            </div>
            {/** Place */}
            <div className="flex space-x-2 border-l border-gray-400 border-opacity-50 pl-3.5 pr-3.5">
              <p className="mt-0.5">
                <span className="sr-only">Place</span>
                <ArchiveIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </p>
              <span className="text-sm">{journal?.place_id?.title}</span>
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
              <span className="text-sm">{readTime.text}</span>
            </div>
          </div>
          <Separator />
          {/** Post Deatils Footer */}
          <div className="grid w-full grid-cols-3 justify-start gap-4 rounded-md">
          </div>
          {/** Content */}
          <div className="relative mx-auto w-full text-sm md:text-base border-slate-500/50 px-2 py-5">
            <h1 className='text-3xl md:text-4xl capitalize font-bold mb-3 text-center'>{journal?.title}</h1>
            <p className='font-light'>{journal?.experience}</p>
          </div>
        </div>
      </div>
    </div>
  )
}