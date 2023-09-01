'use client'

import React, { useRef, useState }  from 'react';
import Image from 'next/image';
import map from "../app/images/mapa.jpeg";
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react';

import {  Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


type Props = {imagery: any, imagingAlt: any, title: any, description: any,  url: any, className: string};


const montserrat = Montserrat({ subsets: ["latin"] })



export default function MasonryMobile(props: Props) {
    const {imagery, title, imagingAlt, description,  url, className } = props

    const swiper = useSwiper();

    const SlideRef = useRef<SwiperRef>(null);

    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false
    })
    // const [handleNext, setHandleNext] = useState()

    const handleNext = () => {
        SlideRef.current?.swiper.slideNext()
    }
    const handlePrev = () => {
        SlideRef.current?.swiper.slidePrev()
    }


    const onSlideChange = (swiper: { isBeginning: any; isEnd: any }) => {
        handleSlideByState({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        })
    }

    const { isLast, isFirst } = slideBegOrNot;
  return (
    <div className={`${className} block md:hidden w-full `}>
        <Swiper
        slidesPerView={1}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 80 },
            480: { slidesPerView: 2, spaceBetween: 150 },
          }}
        navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        }}
        modules={[ Navigation]}
        ref={SlideRef}
        onSlideChange={onSlideChange}

        className="mySwiper grid grid-cols-3 gap-4 py-3 relative"
      >
        <SwiperSlide className=' my-12 flex rounded-xl shadow-slate-500  h-full'>

        <Link href={url} className={`${className} group flex w-full  transition duration-300 ease-in-out overflow-hidden relative  `}>
            <div className="flex w-full items-center relative h-full py-20 rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full absolute h-full transition duration-300 ease-in-out object-cover group-hover:scale-110 rounded-lg' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="flex flex-col justify-between w-10/12 mx-auto z-50  p-2">
                    <h1 className={`${montserrat.className} transition duration-300 ease-in-out  group-hover:scale-95 text-2xl font-bold `}>{title}</h1>
                    <p className={`${montserrat.className} transition   flex items-center mt-2 duration-300 ease-in-out  group-hover:scale-95 font-normal`}>{description}</p>
                </div>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className=' my-12 flex rounded-xl shadow-slate-500  h-full'>

        <Link href={url} className={`${className} group flex w-full  transition duration-300 ease-in-out overflow-hidden relative  `}>
            <div className="flex w-full items-center relative h-full py-20 rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full absolute h-full transition duration-300 ease-in-out object-cover group-hover:scale-110 rounded-lg' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="flex flex-col justify-between w-10/12 mx-auto z-50  p-2">
                    <h1 className={`${montserrat.className} transition duration-300 ease-in-out  group-hover:scale-95 text-2xl font-bold `}>{title}</h1>
                    <p className={`${montserrat.className} transition   flex items-center mt-2 duration-300 ease-in-out  group-hover:scale-95 font-normal`}>{description}</p>
                </div>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className=' my-12 flex rounded-xl shadow-slate-500  h-full'>

        <Link href={url} className={`${className} group flex w-full  transition duration-300 ease-in-out overflow-hidden relative  `}>
            <div className="flex w-full items-center relative h-full py-20 rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full absolute h-full transition duration-300 ease-in-out object-cover group-hover:scale-110 rounded-lg' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="flex flex-col justify-between w-10/12 mx-auto z-50  p-2">
                    <h1 className={`${montserrat.className} transition duration-300 ease-in-out  group-hover:scale-95 text-2xl font-bold `}>{title}</h1>
                    <p className={`${montserrat.className} transition   flex items-center mt-2 duration-300 ease-in-out  group-hover:scale-95 font-normal`}>{description}</p>
                </div>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className=' my-12 flex rounded-xl shadow-slate-500  h-full'>

        <Link href={url} className={`${className} group flex w-full  transition duration-300 ease-in-out overflow-hidden relative  `}>
            <div className="flex w-full items-center relative h-full py-20 rounded-lg">               
                <Image src={imagery}  alt={imagingAlt} className='w-full absolute h-full transition duration-300 ease-in-out object-cover group-hover:scale-110 rounded-lg' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="flex flex-col justify-between w-10/12 mx-auto z-50  p-2">
                    <h1 className={`${montserrat.className} transition duration-300 ease-in-out  group-hover:scale-95 text-2xl font-bold `}>{title}</h1>
                    <p className={`${montserrat.className} transition   flex items-center mt-2 duration-300 ease-in-out  group-hover:scale-95 font-normal`}>{description}</p>
                </div>
            </div>
        </Link>
        </SwiperSlide>


        </Swiper>

        <div className="flex p-6 flex-row-reverse  ">
            <div className="flex ">
  
                <button className={`flex border-2 border-foreground bg-[#f25f14] m-1 p-3 rounded-full cursor-pointer transition text-foreground duration-300 ease-in-out ${isFirst ? 'bg-background  opacity-50 border-[#f25f14] transition duration-300 ease-in-out': ' '}`} onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className={`flex border-2 border-foreground bg-[#f25f14] m-1 p-3 rounded-full cursor-pointer transition text-foreground duration-300 ease-in-out ${isLast ? 'bg-background  opacity-50 border-[#f25f14] transition duration-300 ease-in-out': ' '}` } onClick={handleNext}>       
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}