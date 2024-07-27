'use client'

import { getMemberShip } from '@/actions/getMembership';
import React, { useEffect, useState } from 'react'

const useMembership = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        handleGetMemebership();
    }, [])
    const handleGetMemebership = async () => {
        await getMemberShip()
            .then(res => {
                setData(res!)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    return { data, loading }
}

export default useMembership
