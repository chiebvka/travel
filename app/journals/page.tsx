import React, { Suspense } from 'react';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import DashHead from '@/components/DashHead';
import type { Metadata } from 'next';
import JournalLoading from '@/components/JournalLoading';
import MainJournal from './components/MainJournal';
import CommonPagination from '@/components/common/CommonPagination';
import PublicEmpty from './components/PublicEmpty';


export const metadata:Metadata = {
  title: 'Travel Journal App',
  description: 'Top Journals',
}

interface JournalProps {
  searchParams: { [key: string]: string | string[] | undefined };
}


export default async function JournalsPage({ searchParams}: JournalProps) {
  
  const supabase = createServerComponentClient({ cookies })
  
  // Fetch total pages
  const { count } = await supabase
  .from("journals")
  .select("*", { count: "exact", head: true });

  // Pagination
  const limit = 6;
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
  const { data, error } = await supabase
  .from("journals")
  .select(`
        *,
        place_id:places(id, title, peak),
        user_id(avatarUrl, trade, username)
        `)
  .order("created_at", { ascending: false })
  .range(from, to)

if (!data || error || !data.length) {
  // notFound;
}





  return (
    <div className=' gap-14  w-full md:max-w-6xl px-3  text-foreground bg-background flex flex-col items-center'>
        <DashHead title={"Your Top News Feed"} subheading={"Here are some top suggestions of places to visit"} />
        <div className="space-y-8 w-10/12 mx-auto  ">
          {/* <JournalLoading /> */}
          {data?.length && data?.length > 0 ? (
            <>
              {data?.map((journal) => (
                <Suspense key={journal.id} fallback={<JournalLoading />}>
                  <MainJournal journal={journal}  />
                </Suspense>
              ))}
            </>
          ): (
            <PublicEmpty />
          )}
        </div>
        {/** Pagination */}
        <div className="w-full md:max-w-4xl px-3">
          {totalPages > 1 && (
            <CommonPagination 
              paginationProps={{
                page: page,
                totalPages: totalPages,
                baseUrl: "/journals",
                pageUrl: "?page="
              }}
            />
          )}
        </div>
    </div>
  )
}