"use client";

import React from 'react';
import paginationConfig from '@/config/common/PaginationConfig';
import { cn } from "@/lib/utils";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import CommonPager from './CommonPager';


interface CommonPaginationProps {
    page: number;
    totalPages: number;
    baseUrl: string;
    pageUrl: string;
}

type Props = {
    paginationProps: CommonPaginationProps;
}


export default function CommonPagination({ paginationProps }: Props) {
    const { page, totalPages, baseUrl, pageUrl } = paginationProps;

    const router = useRouter();
    const prevLink =
      page > 2 ? baseUrl + pageUrl + (page - 1).toString() : baseUrl;
    const nextLink =
      page < totalPages
        ? baseUrl + pageUrl + (page + 1).toString()
        : baseUrl + pageUrl + page.toString();

    // Artificial for loop for JSX or TSX
    // It will be used for pagination
    var rows: Array<number> = [];
    var i = 0;
    while (++i <= totalPages) rows.push(i);
    // End of pagination for loop function

  return (
    <nav className="mt-8 flex items-center justify-between  my-3 px-4 sm:px-0">
        <div className="flex w-0 flex-1">
        <button
            type="button"
            onClick={() => {
            router.push(prevLink);
            router.refresh();
            }}
            className={cn(
            {
                "pointer-events-none opacity-50": page === 1,
            },
            "inline-flex items-center border-t-2 border-primary pr-1 pt-4 text-sm font-medium text-primary  hover:opacity-70",
            )}
        >
            <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 "
            aria-hidden="true"
            />
            {paginationConfig.previous}
        </button>
        </div>
    {/* Pagination */}
    <div className="hidden md:-mt-px md:flex">
        {Array(totalPages)
            .fill(1)
            .map((el, i) => (
                <CommonPager
                key={v4()}
                paginationProps={{
                    index: i,
                    totalPages: totalPages,
                    currentPage: page,
                    baseUrl: baseUrl,
                    pageUrl: pageUrl,
                }}
                />
        ))}
    </div>

    <div className="-mt-px flex w-0 flex-1 justify-end">
      <button
        type="button"
        onClick={() => {
          router.push(nextLink);
          router.refresh();
        }}
        className={cn(
          "inline-flex items-center border-t-2 border-primary pl-1 pt-4 text-sm font-medium text-primary hover:border-primary hover:opacity-70",
          { "pointer-events-none opacity-50": page >= totalPages },
        )}
      >
        {paginationConfig.next}
        <ArrowLongRightIcon
          className="ml-3 h-5 w-5 text-primary"
          aria-hidden="true"
        />
      </button>
    </div>
  </nav>
  )
}