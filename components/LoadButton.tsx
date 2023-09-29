import React from 'react'

type Props = {content: any}

export default function LoadButton(props: Props) {
  const { content } = props
  return (
    <div className='flex items-center justify-center w-full my-8 py-4'>
        <button type="button" className="text-white bg-[#f25f14] hover:bg-[#f5ae8a] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#f25f14] dark:hover:bg-[#f5ae8a] hover:text-gray-800 dark:focus:ring-gray-700 dark:border-gray-700">{content}</button>
    </div>
  )
}