"use server";
import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/zeroBounceApi";
import { clerkClient } from "@clerk/nextjs/server";
export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();
    const allUsers = await clerkClient.users.getUserList();
    console.log(allUsers.data);
    const newsLetterOwner = allUsers.data.find((i) => {
      return i.username === username;
    });
    if(!newsLetterOwner)
    {
        return JSON.stringify({err:"Invalid username"})
    }
    //check if subscribers already exists
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
    });
    if (isSubscriberExist) {
      return JSON.stringify({ err: "Email already exists" });
    }
    // validation of email
    const validationResponse = await validateEmail({ email });
    const response=JSON.parse(validationResponse);
    if (response.status === "invalid") {
      return JSON.stringify({ err: "Email not valid" });
    }
    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
    });
    return JSON.stringify(subscriber);
  } catch (err) {
    console.log(err);
  }
};
