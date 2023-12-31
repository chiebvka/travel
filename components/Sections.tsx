import React from 'react'
import vacay from "./vacay1.jpeg"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

type Props = {imagery: any, imagingAlt: any, title: any, description: any, link: any, url: any, className: string}

export default function Sections(props: Props) {

    const {imagery, title, imagingAlt, description, link, url, className } = props

  return (
    <div className={`${className} md:flex block md:flex-row text-foreground items-center md:justify-between p-3  w-full`}>
        <div className="flex md:w-6/12 w-full  rounded-lg ">
            <div className="flex md:w-10/12 w-full my-8 md:my-0 mx-auto relative h-full  rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full h-full object-contain rounded-lg' />
            </div>
        </div>
        <div className="flex flex-col md:px-6 w-full mx-auto md:ml-2 md:w-6/12 ">
            <h2 className="md:text-4xl text-xl my-3 font-bold">{title}</h2>
            <p className=" font-light md:text-xl text-base my-2 ">{description}</p>
            <div className="flex items-start justify-start mt-8 md:mt-12 w-full">
                <Button >
                  <Link href={url} className=" px-8 md:px-5  ">
                    {link}
                  </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}