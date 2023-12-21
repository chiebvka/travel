import ErrorFound from '@/components/ErrorFound'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className='w-10/12 mx-auto'>
        <ErrorFound />
    </div>
  )
}