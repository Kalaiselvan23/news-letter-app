
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import '../shared/styles/globals.css'
import toast,{Toaster} from "react-hot-toast"
import {
  ClerkProvider, SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs"

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'antialiased',
            fontHeading.variable,
            fontBody.variable
          )}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            {/* <UserButton /> */}
          </SignedIn>
          {children}
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  )
}