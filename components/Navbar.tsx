"use client"

import React, { Dispatch, FC, Fragment, SetStateAction, useState } from 'react';
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
import { ModeToggle } from './ModeToggle';
import { usePathname } from "next/navigation";
import logo from '../public/images/02.png'
import { v4 } from "uuid";

import { dashBoardLogout, dashBoardMenusLoop } from "@/config/dashboard";
import { cn, getUrl } from "@/lib/utils";
import Image from 'next/image';

const obitron = Architects_Daughter({ weight: '400', subsets: ["latin"] })
const cavet = Caveat({ subsets: ['latin'] })
type Props = {}

export default function Navbar({}: Props) {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const currentPath = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Journals', href: '/journals' },
    { name: 'Places', href: '/places' },
    { name: 'Requests', href: '/requests' },
  ]



  return (
    <>
      <div className="hidden md:flex mt-2  lg:flex-1">
        <Link href="/" className="-m-1.5 flex p-1.5">
          <span className="sr-only">Your Company</span>
          <h1 className={`${cavet.className} h-8 md:text-4xl text-2xl z-10 text-white  w-auto`}>mytraveljournal.</h1>
        </Link>
      </div>
      <div className="flex mt-2 lg:hidden">
        <button
          type="button"
          className="  inline-flex items-start justify-center z-10 rounded-md  "
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-8 w-8" aria-hidden="true" />
        </button>
        <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 pb-4">
                  <Link
                    href={getUrl()}
                    className="flex h-16 shrink-0 items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Your Company</span>
                    <h1 className={`${cavet.className} h-8 md:text-4xl text-2xl z-10 text-foreground  w-auto`}>mytraveljournal.</h1>
                  </Link>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {dashBoardMenusLoop.map((menu) => (
                            <li key={v4()}>
                              <Link
                                href={menu.slug || ""}
                                onClick={() => setSidebarOpen(false)}
                                className={cn(
                                  currentPath === menu.slug
                                    ? "bg-gray-50 text-[#DEB738]"
                                    : "text-foreground hover:bg-gray-50 hover:text-[#DEB738]",
                                  "group flex gap-x-3 rounded-md p-2 font-sans text-sm font-semibold leading-6",
                                )}
                              >
                                <menu.icon
                                  className={cn(
                                    currentPath === menu.slug
                                      ? "text-[#DEB738]"
                                      : "text-foreground group-hover:text-[#DEB738]",
                                    "h-6 w-6 shrink-0 font-sans",
                                  )}
                                  aria-hidden="true"
                                />
                                {menu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
{/* 
        <Dialog as="div" className="lg:hidden has-before hover:shine z-40 transition-all duration-150 delay-250" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0  z-10" ></div>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto hover:shine transition-all duration-150 delay-500  bg-background  px-6 py-3">
       
            <div className="flex w-full mx-auto items-center justify-between">
              <Link href="/"  onClick={() => setMobileMenuOpen(false)} className="md:ml-7 mb-7  p-1.5">
                <span className={`${cavet.className} text-2xl font-extrabold text-foreground `}>mytraveljournal.</span>
              </Link>
              <button
                type="button"
                className=" md:mr-7 mb-4 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
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
        </Dialog> */}
      </div>
      <div className="hidden mt-2 lg:flex lg:gap-x-12 items-center">
        {dashBoardMenusLoop.map((item) => (
          <Link key={item.title} href={item.slug || "/"} className=" text-white md:text-xl text-base hover:opacity-60 font-normal leading-6 ">
            {item.title}
          </Link>
        ))}

      </div>
      {/* <ModeToggle /> */}
    </>
  )
}