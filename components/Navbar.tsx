"use client"

import React, { Fragment, useState } from 'react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Caveat } from 'next/font/google'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { Architects_Daughter } from 'next/font/google';
import Link from 'next/link';

const obitron = Architects_Daughter({ weight: '400', subsets: ["latin"] })
const cavet = Caveat({ subsets: ['latin'] })
type Props = {}

export default function Navbar({}: Props) {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Guide', href: '/' },
    { name: 'Place', href: '/' },
    { name: 'Plan', href: '/' },
  ]


  return (
    <>
      <div className="flex  lg:flex-1">
        <a href="#" className="-m-1.5  p-1.5">
          <span className="sr-only">Your Company</span>
          <h1 className={`${cavet.className} h-8 text-4xl z-10 text-white  w-auto`}>mytraveljournal.</h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-mx-2 my-2 inline-flex items-center justify-center z-10 rounded-md p-2.5 "
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Dialog as="div" className="lg:hidden has-before hover:shine z-40 transition-all duration-150 delay-250" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0  z-10" ></div>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto hover:shine transition-all duration-150 delay-500  bg-background  px-6 py-3">
          {/* <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-11/12 overflow-y-auto bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> */}
            <div className="flex w-full mx-auto items-center justify-between">
              <Link href="/"  onClick={() => setMobileMenuOpen(false)} className="md:ml-7 mb-7  p-1.5">
                <span className={`${cavet.className} text-4xl font-extrabold text-foreground `}>mytraveljournal.</span>
              </Link>
              <button
                type="button"
                className=" md:mr-7 mb-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 w-11/12 mx-auto flow-root">
              <div className="-my-6 md:ml-7 mb-7 divide-y divide-foreground">
                <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-50"
                  >
                       {item.name}
                  </Link>
                 ))}
                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 items-center">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="text-sm text-white font-normal leading-6 ">
            {item.name}
          </Link>
        ))}
      </div>
    </>
  )
}