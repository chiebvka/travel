import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { Montserrat } from 'next/font/google';
import { Journal } from '@/types/collection';

type Props = {
  journal: Journal;
}

const montserrat = Montserrat({ subsets: ["latin"] })

export default function PersonalJournal({journal}: Props) {
  
  const imageUrl = journal.imageUrl || '';

  return (
    <>
      <div className='w-full px-2 border-t  mt-4 '> 
        <Link href={`/journal/${journal.id}`} className="flex md:flex-row group flex-col my-5">
            <div className="flex md:w-6/12 w-full border-2 rounded-lg ">
            {journal.imageUrl  && (
                <div className="flex w-full my-8 md:my-0 mx-auto relative h-80 rounded-lg">
                  <Image
                    src={journal.imageUrl || ''}
                    alt={journal.title || ''}
                    fill={true}
                    blurDataURL='blur'
                    placeholder='blur'
                    className='w-full h-full transition duration-300 ease-in-out object-cover group-hover:scale-90 rounded-lg'
                  />
                </div>
              )}
            </div>
            <div className="md:w-6/12 w-full transition duration-300 ease-in-out group-hover:scale-105 rounded-lg lg:px-8 md:px-4 px-4 md:ml-3 ">
                <div className="flex mt-5">
                    <div className="flex items-center  w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f25f14" className="w-3 h-3">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                        </svg>
                        <span className='ml-1 text-xs flex '>{journal?.place_id?.title}</span>
                    </div>
                    <div className='w-1/2 flex items-center  text-xs'>
                      Peak Seasons :
                      <span className="text-[#f25f14] capitalize ml-2">{journal?.place_id?.peak}</span>
                    </div>
                </div>
                <h1 className={`${montserrat.className} lg:text-base text-xs md:text-sm mt-5 font-bold line-clamp-1 `}>{journal.title}</h1>
                <div className="flex mt-5">
                    <p className='line-clamp-3 lg:text-base text-xs md:text-sm font-light'>{journal.experience}</p>
                </div>
                <span className='flex mr-3 justify-end text-xs md:text-sm my-5 opacity-70' >2 comments</span>
            </div>
        </Link> 
      </div>
    </>
  )
}