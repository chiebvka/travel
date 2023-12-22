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
import Link from 'next/link';

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
                <Button className="w-full">
                  <Link href="/journals">Search</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}