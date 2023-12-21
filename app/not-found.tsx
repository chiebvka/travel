import ErrorFound from '@/components/ErrorFound'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className='w-10/12 mx-auto'>
        <ErrorFound />
    </div>
  )
}