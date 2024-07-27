"use client"
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from '../ui/button';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { stripeSubscribe } from '@/actions/stripeSubscribe';
const PricingCard = () => {
    const { user } = useUser();
    const history = useRouter();
    const handleSubscription = async ({ price }: { price: string }) => {
        await stripeSubscribe({ price: price, userId: user?.id! }).then(
            (res: any) => {
                history.push(res);
            }
        );
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing to Fit Your Needs</h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Choose the plan that works best for your newsletter. We have options for individuals and businesses of
                        all sizes.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Starter</CardTitle>
                            <CardDescription>Perfect for individuals and small businesses.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-1">
                            <div>
                                <div className="flex items-baseline justify-center space-x-2">
                                    <span className="text-4xl font-bold">$9</span>
                                    <span className="text-sm text-muted-foreground">/month</span>
                                </div>
                                <p className="text-center text-muted-foreground">Up to 1,000 subscribers</p>
                            </div>
                            <Button className="mt-6"  onClick={() => handleSubscription({
                                price: "price_1PdtT5SG9TMvLugNkjji9jZX"
                            })}>
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>For growing businesses and content creators.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-1">
                            <div>
                                <div className="flex items-baseline justify-center space-x-2">
                                    <span className="text-4xl font-bold">$29</span>
                                    <span className="text-sm text-muted-foreground">/month</span>
                                </div>
                                <p className="text-center text-muted-foreground">Up to 10,000 subscribers</p>
                            </div>
                            <Button className="mt-6" onClick={() => handleSubscription({
                                price: "price_1Pdta3SG9TMvLugNMRW2GGKB"
                            })}>
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>For large businesses and organizations.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-1">
                            <div>
                                <div className="flex items-baseline justify-center space-x-2">
                                    <span className="text-4xl font-bold">$99</span>
                                    <span className="text-sm text-muted-foreground">/month</span>
                                </div>
                                <p className="text-center text-muted-foreground">Unlimited subscribers</p>
                            </div>
                            <Button className="mt-6" onClick={() => handleSubscription({
                                price: "price_1PdtZKSG9TMvLugNYAvtLLGA"
                            })}>
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default PricingCard
