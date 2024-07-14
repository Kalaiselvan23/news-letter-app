"use server"
import mongoose from "mongoose"
import { connectDb } from "@/shared/libs/db"
import Subscriber from "@/models/subscriber.model";

export const getSubscribers=async({newsLetterOwnerId}:{newsLetterOwnerId:string})=>{
    try{
        await connectDb();
        const subscribers=await Subscriber.find({newsLetterOwnerId})
        return JSON.stringify(subscribers);
    }
    catch(err)
    {
        console.log(err)
    }
}