"use client"
import React from 'react'
import { MailOpenIcon,MenuIcon } from '@/shared/icons'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuList,NavigationMenuLink} from '../ui/navigation-menu'
import { Sheet,SheetTrigger,SheetContent } from '../ui/sheet'
import { Button } from '../ui/button'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
const Header = () => {
    const {user}=useUser();
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MailOpenIcon className="h-6 w-6" />
          <span className="sr-only">Newsletter Platform</span>
        </Link>
        <NavigationMenu className="ml-auto hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
              <MailOpenIcon className="h-6 w-6" />
              <span className="sr-only">Newsletter Platform</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Pricing
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="ml-auto">
          {/* <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link> */}
          {
            user?(
                <>
                <Link href="/dashboard">
                <Image src={user.imageUrl} alt="" width={40} height={40} className='rounded-full'  />
                </Link></>
            ):<>
            <Link href={"/sign-up"}>
            Login
            </Link>
            </>
          }
        </div>
      </header>
    </div>
  )
}

export default Header
