"use client"
import React from 'react'
import { useClerk } from '@clerk/nextjs';
import { getSubscribers } from '@/actions/getSubscribers';
import { useState, useEffect } from 'react';
const useSubscribersData = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true)
    const { user } = useClerk();
    useEffect(() => {
        GetSubscribers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    const GetSubscribers = async () => {
        await getSubscribers({ newsLetterOwnerId: user?.id! })
            .then(res => {
                console.log(res)
                setData(JSON.parse(res!))
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
            })
    }
    return (
        { subscribersData:data, loading }
    )
}

export default useSubscribersData
