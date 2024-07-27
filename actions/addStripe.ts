"use server";
import Stripe from "stripe"
import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";

export const addStripe=async({user}:{user:any})=>{
    try{
        await connectDb();
        const membership=await Membership.findOne({userId:user.id!});
        console.log(membership)
        if(membership)
        {
            return 
        }
        else{
            const stripe=new Stripe(process.env.STRIPE_SECRET_KEY!,{
                apiVersion:"2024-06-20"
            })
            await stripe.customers.create({
                email:user.emailAdresses[0],
            })
        
        }
    
    }
    catch(err){
        console.log(err)
    }
}