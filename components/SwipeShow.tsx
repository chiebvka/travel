'use client'

import React, { useRef, useState }  from 'react'
import Image from 'next/image'
import map from "../app/images/mapa.jpeg"
import Link from 'next/link'
import { Montserrat } from 'next/font/google';
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Navigation } from 'swiper/modules';

type Props = {imagery: any, imagingAlt: any, title: any, description: any, reviewer: any, className: string}

export default function SwipeShow(props: Props) {
    const {imagery, title, imagingAlt, description,  reviewer, className } = props

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
    <div className='block w-full'>
        <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 80 },
            480: { slidesPerView: 2, spaceBetween: 150 },
            768: { slidesPerView: 2, spaceBetween: 50 },
            1024: { slidesPerView: 3},
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
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8  flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8  md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 flex rounded-xl shadow-slate-500  h-full'>
            <div className="flex rounded-lg h-full p-8 md:p-7 lg:p-8 flex-col">
                <blockquote>
                    <h2 className=" text-lg font-bold line-clamp-2 mb-3"> "Best Location Guide"</h2>
                </blockquote>
             
                <div className="flex flex-col justify-between mb-5 flex-grow">
                    <p className="leading-relaxed text-base font-normal  line-clamp-3 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine</p>

                </div>
                <div className="flex items-center mb-3">
                    <div
                        className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
                            <Image src={map} alt={"Reviewer Display Picture"} className='w-full h-full rounded-full object-cover flex items-center justify-center' />
                    </div>
                    <h2 className=" text-lg font-medium">Mary Joy</h2>
                </div>
            </div>
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