import React from 'react'
import vacay from "./vacay1.jpeg"
import Image from 'next/image'
import Link from 'next/link'

type Props = {imagery: any, imagingAlt: any, title: any, description: any, link: any, url: any, className: string}

export default function Sections(props: Props) {

    const {imagery, title, imagingAlt, description, link, url, className } = props

  return (
    <div className={`${className} flex   border-2 items-center justify-between p-3 border-purple-600 w-full`}>
        <div className="flex  md:w-6/12 rounded-lg border-2">
            <div className="flex w-full  relative h-full  rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full h-full object-contain rounded-lg' />
            </div>
        </div>
        <div className="flex flex-col px-6 ml-2 md:w-6/12 border-2">
            <h2 className="text-4xl my-3 font-bold">{title}</h2>
            <p className=" font-normal my-2 text-xl">{description}</p>
            <Link href={url} className='flex my-3 items-center w-4/12 justify-center p-3  rounded-lg no-underline bg-[#f25f14] text-white hover:bg-btn-background-hover' >{link}</Link>
        </div>
    </div>
  )
}