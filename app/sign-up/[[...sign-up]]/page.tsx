"use client"
import React from 'react'
import { SignUp } from '@clerk/nextjs'
const Page = () => {
  return (
    <div className='w-full flex h-screen items-center justify-center'>
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}

export default Page
