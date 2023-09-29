import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Posts from '@/components/Posts'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='text-foreground w-9/12  absolute py-12 px-10 right-0'>
        <Posts action={"Edit Post"} />
    </div>
  )
}