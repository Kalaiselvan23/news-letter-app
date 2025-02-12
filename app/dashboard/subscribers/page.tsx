import SubscribersData from '@/components/dashboard/data/subscribers.data'
import SubscriberData from '@/components/subscribers/SubscriberData'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full p-5 h-screen overflow-hidden'>
      <h1 className='text-2xl font-medium'>
        Subscribers
      </h1>
      <p className='pt-1 text-lg'>View and Manage your subscribers</p>
      <SubscribersData/>
    </div>
  )
}

export default Page
