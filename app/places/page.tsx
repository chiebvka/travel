import React, { Suspense } from 'react';
import DashHead from '@/components/DashHead';
import Locations from '@/components/Locations';
import type { Metadata } from 'next';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import JournalLoading from '@/components/JournalLoading';
import PublicEmpty from '../journals/components/PublicEmpty';
import CommonPagination from '@/components/common/CommonPagination';


export const metadata:Metadata = {
  title: 'Travel Journal App - Top PLaces',
  description: 'Most journaled places',
}

type Props = {}
interface JournalProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PlacesPage({ searchParams}: JournalProps) {
  const supabase = createServerComponentClient({ cookies })

    // Fetch total pages
    const { count } = await supabase
    .from("journals")
    .select("*", { count: "exact", head: true });
  
    // Pagination
    const limit = 11;
    const totalPages = count ? Math.ceil(count / limit) : 0;
    const page =
      typeof searchParams.page === "string" &&
      +searchParams.page > 1 &&
      +searchParams.page <= totalPages
        ? +searchParams.page
        : 1;
    const from = (page - 1) * limit;
    const to = page ? from + limit : limit;

      // Fetch Journals
      const { data: placeData, error } = await supabase
      .from("places")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to)


  return (
    <div className=' w-full mt-4 px-4 min-h-screen overflow-auto relative text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Top Suggestions for your next travel"} subheading={"We provide with the best travel experience"} />
        <div className="w-10/12 mt-4 mx-auto">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-12 gap-y-4   w-full px-4 '>
            <>
              {placeData?.map((place) => (
                <Suspense key={place?.id} fallback={<JournalLoading />}>
                  <Locations place={place} />
                </Suspense>
              ))}
            </>
          </div>
                  {/** Pagination */}
        <div className="w-full md:max-w-4xl px-3">
          {totalPages > 1 && (
            <CommonPagination 
              paginationProps={{
                page: page,
                totalPages: totalPages,
                baseUrl: "/places",
                pageUrl: "?page="
              }}
            />
          )}
        </div>
        </div>
    </div>
  )
}