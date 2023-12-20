"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

type CommonPagerProps = {
  paginationProps: CommonPaginationProps;
};


interface CommonPaginationProps {
  index: number;
  totalPages: number;
  currentPage: number;
  baseUrl: string;
  pageUrl: string;
}


export default function CommonPager({ paginationProps }: CommonPagerProps) {

  const { index, totalPages, currentPage, baseUrl, pageUrl } = paginationProps;

    const router = useRouter();
    const i = index + 1;

    if (
      i <= 3 || //the first three pages
      i >= totalPages - 2 || //the last three pages
      (i >= currentPage - 1 && i <= currentPage + 1))

  return (
    <button
        type="button"
        onClick={() => {
          router.push(baseUrl + pageUrl + i.toString());
          router.refresh();
        }}
        key={v4()}
        className={cn(
          "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary hover:border-primary hover:opacity-70",
          { "border-primary": i === currentPage }
        )}
      >
        {i}
      </button>
  )
  
  return (
    //any other page should be represented by ...
    <div className="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-primary hover:text-gray-700">
      ...
    </div>
  );
}