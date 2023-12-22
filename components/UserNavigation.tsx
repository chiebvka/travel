"use client"

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {   DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import LogoutButton from './LogoutButton';
import Link from 'next/link';

type Props = {}

export default function UserNavigation({}: Props) {

    
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 mt-1 ml-1 md:mr-6 mb-2 rounded-full">
            <Avatar className=" w-7 h-7 md:h-10 md:w-10">
              <AvatarImage src="/images/04.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
              <Link href="/profile">
                <DropdownMenuItem>
                    Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="/journal/write">
                <DropdownMenuItem>
                  Write a journal
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="/profile/edit">
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem >
            <LogoutButton />
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}