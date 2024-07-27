"use server"
import { connectDb } from "@/shared/libs/db"
import Email from "@/models/email.model"

export const deleteEmail=async({emailId}:{emailId:string})=>{
    try{
        await connectDb();
        await Email.findByIdAndDelete(emailId)
        return JSON.stringify({
            message:"Email Deleted Successfully"
        })
    }
    catch(err)
    {
        console.log(err)
    }
}