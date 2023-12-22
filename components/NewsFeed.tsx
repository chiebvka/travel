import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

type Props = {imagery: any, imagingAlt: any, title: any, description: any, peaks: any, url: any, cityName: any, className: string}


const montserrat = Montserrat({ subsets: ["latin"] })

export default function NewsFeed(props: Props) {

  const {imagery, title, imagingAlt, description, peaks, url, cityName, className } = props

  return (
    <Link href={url} className={`${className} h-[390px] group mt-3 rounded-lg shadow-md  shadow-slate-600 transition duration-300 ease-in-out overflow-hidden relative `}>
      <div className="flex  h-1/2 relative   w-full">
        <Image 
          src={imagery} 
          alt={imagingAlt}                          
          fill={true}
          blurDataURL='blur'
          placeholder='blur'
          className='w-full h-full transition border-2 border-primary duration-300 ease-in-out object-cover group-hover:scale-90 rounded-lg'   /> 
      </div>
      <div className="flex flex-col h-1/2 px-3 w-full">
        <h1 className={`${montserrat.className} text-base mt-3 font-bold capitalize line-clamp-2 `}>{title}</h1>
        <div className="flex mt-2">
          <div className="flex items-center  w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f25f14" className="w-3 h-3">
              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
            </svg>
            <span className='ml-1 text-xs flex '>{cityName}</span>

          </div>
          <span  className="w-1/2 flex items-end justify-end text-xs">Peak: <span className='text-primary underline ml-2'>{peaks} </span></span>
        </div>
        <div className="flex mt-2">
          <p className='line-clamp-3'>{description}</p>
        </div>
      </div>
    </Link>
  )
}