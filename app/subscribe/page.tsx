"use client"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"

import React from 'react'
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { subscribe } from "@/actions/addSubscriber"

const Page = () => {
    const [value, setValue] = useState("");
    const [loading,setLoading]=useState(false);
    const searchParams = useSearchParams();
    const username: string = searchParams.get('username')!;
    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault();
        setLoading(true)
        await subscribe({email:value,username}).then(res=>{
            setLoading(false)
            const response=JSON.parse(res!)
            if(response.err)
            {
                setLoading(false)
                toast.error(response.err)
            }
            else{
                toast.success("Subscribed successfully")
            }
        }).catch(err=>{
            console.log(err)
        })
        setValue("")
    }
    return (
        <div className="w-full flex flex-col items-center justify-center h-screen">
            <div>
                <h1 className="text-7xl pb-8 capitalize">
                    {username} Newsletter
                </h1>
                <form
                    className="flex w-full max-w-md gap-3 justify-center mx-auto"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Input type="email" name="email" required value={value} onChange={e => setValue(e.target.value)}
                        placeholder="Enter Your Email"
                    />
                    <Button disabled={loading} type="submit">Subscribe</Button>
                </form>
            </div>
        </div>
    )
}

export default Page
