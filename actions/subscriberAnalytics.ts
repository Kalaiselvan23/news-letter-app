"use server"
import Subscriber from "@/models/subscriber.model"
import { generateAnalyticsData } from "@/shared/utils/analyticsGenerator"

export const subscriberAnalytics=async()=>{
    try{
        const subscribers=await generateAnalyticsData(Subscriber);
        return subscribers
    }
    catch(err)
    {
        console.log(err)
    }
}