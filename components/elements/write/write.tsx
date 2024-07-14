"use client"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useClerk, useUser } from '@clerk/nextjs'
import { getEmails } from '@/actions/getEmails'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { CirclePlus } from 'lucide-react'
const Write = () => {
    const [emailTitle, setEmailTitle] = useState<string>("");
    const [emails, setEmails] = useState<any>([]);
    const [error, setError] = useState<string>("");
    const router = useRouter();
    const { user } = useClerk();
    useEffect(() => {
        if (user?.id) {
            getEmails({ newsLetterOwnerId: user.id })
                .then(res => {
                    const data = JSON.parse(res!);
                    setEmails(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [user])
    const handleCreate = (event: Event) => {
        event.preventDefault();
        console.log(emailTitle)
        if (emailTitle.length === 0) {
            toast.error("Enter email subject to continue")
        }
        else {
            const formattedTitle = emailTitle.replace(/\+/g, "-").replace(/&/g, "-");
            router.push(`/dashboard/new-email?subject=${formattedTitle}`)
        }
    }
    const deleteHandler = (emailId: string) => {
        console.log("Deleting ", emailId)
    }
    return (
        <div className='flex gap-3'>
            <Dialog>
                <DialogTrigger asChild className='ml-2'>
                    <Button className='w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer'>
                    <CirclePlus />
                        <span>Create</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create Email</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                defaultValue="sample@gmail.com"
                                className="col-span-3"
                                onChange={(event) => setEmailTitle(event.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={(e) => handleCreate(e)}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {emails && emails.map((i: any) => {
                const formattedTitle = i?.title
                    ?.replace(/\s+/g, "-")
                    .replace(/&/g, "-");
                return (
                    <div
                        key={i?._id}
                        className="w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer"
                    >
                        <span
                            className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer"
                            onClick={() => deleteHandler(i?._id)}
                        >
                            <Trash2 size={20} />
                        </span>
                        <Link
                            href={`/dashboard/new-email?subject=${formattedTitle}`}
                            className="text-xl"
                        >
                            {i.title}
                        </Link>
                    </div>
                );
            })}

        </div>

    )
}

export default Write
