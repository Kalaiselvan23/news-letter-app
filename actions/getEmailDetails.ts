"use server"
import { connectDb } from "@/shared/libs/db";
import Email from "@/models/email.model";

export const GetEmailDetails=async({title,newsLetterOwnerId}:{title:string,newsLetterOwnerId:string})=>{
    try{
        await connectDb();
        const email=await Email.findOne({title,newsLetterOwnerId})
        return JSON.stringify(email);
    }
    catch(err)
    {
        console.log(err)
    }
}