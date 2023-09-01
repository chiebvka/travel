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
import Link from 'next/link';



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const cavet = Caveat({ subsets: ['latin'] })

type Props = {}

export default function Buttons({}: Props) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
        <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Dialog as="div" className="lg:hidden has-before hover:shine transition-all duration-150 delay-250" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0  z-10" ></div>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto hover:shine transition-all duration-150 delay-500  bg-[#bebebe]  px-6 py-6">
          {/* <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-11/12 overflow-y-auto bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> */}
            <div className="flex w-11/12 mx-auto items-center justify-between">
              <Link href="/"  onClick={() => setMobileMenuOpen(false)} className="md:ml-7 mb-7  p-1.5">
                <span className={`${cavet.className} text-4xl font-extrabold text-slate-700 `}>Ebvka.</span>
              </Link>
              <button
                type="button"
                className=" md:mr-7 mb-5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 w-11/12 mx-auto flow-root">
              <div className="-my-6 md:ml-7 mb-7 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
              
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/articles"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Articles
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </div>
  )
}