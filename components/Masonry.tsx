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

        <Link href={url} className={`${className} group flex border-2 transition duration-300 ease-in-out overflow-hidden relative  border-green-600`}>
            <div className="flex w-full items-center relative h-full  rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full absolute h-full transition duration-300 ease-in-out object-cover group-hover:scale-110 rounded-lg' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="flex flex-col justify-between w-full z-50 border-2 p-2">
                    <h1 className={`${montserrat.className} transition duration-300 ease-in-out  group-hover:scale-95 text-2xl font-bold `}>{title}</h1>
                            <p className={`${montserrat.className} transition   flex items-center mt-2 duration-300 ease-in-out  group-hover:scale-95 font-normal`}>{description}</p>
                        {/* <div className="flex flex items-center mt-4  border-2 border-red-600">
                        </div>
                    <div className="flex items-center mt-4 justify-between">
                    </div> */}
                        {/* <div className="flex w-5/12 border-2 border-red-600 justify-end">
                            <Link href={url} className='w-6/12 mx-auto  border-2 border-white rounded-xl flex items-center justify-center p-[7px] gap-[7px] h-[42px] '> {link}</Link>
                        </div> */}
                </div>
            </div>
            {/* <div className="flex border-2 row-span-2  border-blue-600"></div>
            <div className="flex border-2  row-span-2 border-red-600"></div>
            <div className="flex border-2 h-48 border-yellow-600"></div>
            <div className="flex border-2 h-64 col-span-2 border-purple-600"></div> */}
        </Link>

  )
}