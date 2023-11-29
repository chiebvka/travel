
import React from "react";
import rio from "../images/rio.jpeg"
import Image from 'next/image';


export default async function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {


    return (
        <>
          <section className="md:h-[80vh] h-full flex md:-mt-40 justify-center items-center bg-cover bg-center bg-fixed">
          <Image alt={" Hero Section"} src={rio} className='md:absolute hidden md:block object-cover w-full my-auto ' />
          <div className="absolute inset-0 bg-black opacity-25">
          </div>
            {children}
          </section>
        </>
    )
}