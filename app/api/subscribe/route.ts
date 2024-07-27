import { connectDb } from "@/shared/libs/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import Subscriber from "@/models/subscriber.model";
import { validateEmail } from "@/shared/utils/zeroBounceApi";
export async function POST(req:NextRequest){
    try{
        const data=await req.json();
        const apiKey=data.apiKey;
        const decoded:any=jwt.verify(apiKey,process.env.JWT_SECRET_KEY!);
        // console.log(decoded);
        await connectDb();
        const isSubscriberExist=await Subscriber.findOne({
            email:data.email,
            newsLetterOwnerId:decoded?.id,
        })
        console.log(isSubscriberExist)
        if(isSubscriberExist)
        {
            return NextResponse.json({err:"Email already exists"});
        }
        const validationResponse=await validateEmail({email:data.email})
        if(validationResponse.status==="invalid")
        {
            return NextResponse.json({err:"Email not valid"})
        }
        const subscriber=await Subscriber.create({
            email:data.email,
            newsLetterOwnerId:decoded?.id,
            source:"By Api",
            status:"Subscribed",
        })
        return subscriber
    }
    catch(err)
    {
        return new NextResponse("Internal Error",{status:500})
    }
}