import React from 'react'

type Props = {}

export default function loading({}: Props) {
  return (
    <div className='flex flex-col flex-1 gap-4 justify-center items-center'>
        <div className="flex flex-col gap-2 justify-center items-center">
            <div className="animate-pulse rounded-md bg-zinc h-6 w-[140px]" />
            <div className="bg-white h-[1px] w-[140px]" />
        </div>
        <div className="animate-pulse rounded-md bg-zinc-200 h-4 w-[200px]" />
    </div>
  )
}