"use client"

import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';


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
    </div>
  )
}