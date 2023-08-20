'use client'

import React,  { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Montserrat } from 'next/font/google';
import { Select, Option } from "@material-tailwind/react";

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]


const montserrat = Montserrat({ weight: '400', subsets: ["latin"] })

type Props = {}

export default function HeroForm({}: Props) {
    const [selected, setSelected] = useState(people[0])
  return (
    <div className="bg-background px-6 rounded-lg w-full flex font-mono text-sm text-foreground">
        <div className="flex px-3 justify-between items-center  w-full ">
            <div className="flex relative flex-col">
                <label htmlFor="countries" className={`${montserrat.className}   text-base font-bold`}>Location</label> 
                <select id="countries" defaultValue={"DEFAULT"} className="block py-1 -ml-1 mr-2 w-full text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="DEFAULT" >Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div className="flex flex-col border-l pl-6 border-foreground">
                <label htmlFor="category" className={`${montserrat.className}  text-base font-bold`}>Categories</label>
                <select id="category" defaultValue={"DEFAULT"} className="block py-1 -ml-1 mr-2 w-full text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="DEFAULT" >Choose a category</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div className="flex flex-col  border-l pl-6 border-foreground">
                <label htmlFor="category" className={`${montserrat.className}  text-base font-bold`}>Duration</label>
                <select id="category" defaultValue={"DEFAULT"} className="block py-1 -ml-1 mr-2 w-full text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="DEFAULT" >Choose a category</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div className="flex items-center  py-2 px-5 rounded no-underline bg-[#f25f14] text-white hover:bg-btn-background-hover">
                <button  className="mr-2">Search</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
            {/* <div className="flex flex-col p-12 border-2 border-black">
                <div className=" fixed w-96 top-16 ">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white  border-2 border-red-600 px-4  py-2  text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 px-3 right-0 flex items-center ">
                            <ChevronUpDownIcon
                                className="h-5 w-5 "
                                aria-hidden="true"
                            />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white px-4  py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                    }`
                                }
                                value={person}
                                >
                                {({ selected }) => (
                                    <>
                                    <span
                                        className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                        {person.name}
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                        </div>
                    </Listbox>
                </div>
            </div> */}
        </div>
    </div>
  )
}