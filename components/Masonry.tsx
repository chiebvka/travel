import Image from 'next/image'
import React from 'react'
import map from "../app/images/mapa.jpeg"
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

type Props = {imagery: any, imagingAlt: any, title: any, description: any,  url: any, className: string}


const montserrat = Montserrat({ subsets: ["latin"] })

export default function Masonry(props: Props) {
    const {imagery, title, imagingAlt, description,  url, className } = props


  return (

        <Link href={url} className={`${className} group flex  transition duration-300 ease-in-out overflow-hidden relative  `}>
            <div className="flex w-full items-center relative h-full  rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full absolute h-full transition duration-300 ease-in-out object-cover group-hover:scale-110 rounded-lg' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="flex flex-col justify-between w-full z-50  p-2">
                    <h1 className={`${montserrat.className} transition md:text-4xl text-xl duration-300 ease-in-out text-white  group-hover:scale-95 text-2xl font-bold `}>{title}</h1>
                            <p className={`${montserrat.className} transition md:text-xl text-base  flex items-center mt-2 duration-300 text-white  ease-in-out  group-hover:scale-95 font-normal`}>{description}</p>
                </div>
            </div>
        </Link>

  )
}