'use client'

import React,  { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Montserrat } from 'next/font/google';
// import { Select, Option } from "@material-tailwind/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

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
    <div className=" w-full   text-foreground">
        <Card className='py-4 border-0'>
            <CardContent className="grid ">
                <div className="grid md:grid-cols-3 grid-cols-2  gap-6">
                    <div className="grid gap-1">
                        <Label htmlFor="location">Location</Label>
                        <Select>
                        <SelectTrigger id="location">
                            <SelectValue placeholder="Mount Fuji" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Antigua and Barbuda</SelectItem>
                            <SelectItem value="2">Barbados</SelectItem>
                            <SelectItem value="3">Saint Lucia</SelectItem>
                            <SelectItem value="4">Sicily</SelectItem>
                            <SelectItem value="5">Palermo</SelectItem>
                            <SelectItem value="6">Bora Bora</SelectItem>
                            <SelectItem value="7">Taj Mahal</SelectItem>
                            <SelectItem value="7">Mount Vesuvius</SelectItem>
                            <SelectItem value="8">Mount Fuji</SelectItem>
                            <SelectItem value="9">Niagara Falls</SelectItem>
                            <SelectItem value="10">Prague Castle</SelectItem>
                            <SelectItem value="11">Palace of Versailles</SelectItem>
                            <SelectItem value="12">Banff National Park</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-1 ">
                        <Label htmlFor="categories">Categories</Label>
                        <Select>
                        <SelectTrigger id="categories">
                            <SelectValue placeholder="Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Family vacation</SelectItem>
                            <SelectItem value="2">Dinner Dates</SelectItem>
                            <SelectItem value="3">Special events</SelectItem>
                            <SelectItem value="4">Dinner events</SelectItem>
                            <SelectItem value="5">Casual Dates</SelectItem>
                            <SelectItem value="6">Coffee Dates</SelectItem>
                            <SelectItem value="7">Get to know the history</SelectItem>
                            <SelectItem value="8">Tour Guides</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="year">Season</Label>
                        <Select>
                        <SelectTrigger id="month">
                            <SelectValue placeholder="Season" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="1">January</SelectItem>
                            <SelectItem value="2">February</SelectItem>
                            <SelectItem value="3">March</SelectItem>
                            <SelectItem value="4">April</SelectItem>
                            <SelectItem value="5">May</SelectItem>
                            <SelectItem value="6">June</SelectItem>
                            <SelectItem value="7">July</SelectItem>
                            <SelectItem value="8">August</SelectItem>
                            <SelectItem value="9">September</SelectItem>
                            <SelectItem value="10">October</SelectItem>
                            <SelectItem value="11">November</SelectItem>
                            <SelectItem value="12">December</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Search</Button>
            </CardFooter>
        </Card>
        {/* <div className="flex md:flex-row flex-col px-3 justify-between items-center  w-full ">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Expires</Label>
            <Select>
              <SelectTrigger id="month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="year">Year</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
            <div className="flex">
                <div className="flex relative flex-col pr-6 ">
                    <label htmlFor="countries" className={`${montserrat.className}  text-sm  md:text-base font-bold`}>Location</label> 
                    <select id="countries" defaultValue={"DEFAULT"} className="block py-1 -ml-1 mr-2 w-full text-[8px] md:text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="DEFAULT" >Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="flex flex-col border-l px-6 border-foreground">
                    <label htmlFor="category" className={`${montserrat.className}  text-sm  md:text-base font-bold`}>Categories</label>
                    <select id="category" defaultValue={"DEFAULT"} className="block py-1 -ml-1 mr-2 w-full text-[8px] md:text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="DEFAULT" >Choose a category</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="flex flex-col  border-l pl-6 border-foreground">
                    <label htmlFor="category" className={`${montserrat.className}  text-sm  md:text-base font-bold`}>Duration</label>
                    <select id="category" defaultValue={"DEFAULT"} className="block py-1 -ml-1 mr-2 w-full text-[8px] md:text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="DEFAULT" >Choose a category</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center md:ml-5 mt-6 md:mt-0 py-2 px-5 rounded no-underline bg-[#f25f14] text-white hover:bg-btn-background-hover">
                <button  className="mr-2">Search</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
        </div> */}
    </div>
  )
}