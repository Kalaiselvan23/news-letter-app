"use server"
import Email from "@/models/email.model";
import { connectDb } from "@/shared/libs/db";

export const saveEmail = async ({
  title,
  content,
  newsLetterOwnerId,
}: {
  title: string;
  content: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    if (email) {
      await Email.findByIdAndUpdate(email._id, {
        content,
      });
      return { msg: "Email updated successfully" };
    } else {
      const newEmail = new Email({
        title,
        content,
        newsLetterOwnerId,
      });
      await newEmail.save();
      return { msg: "Email created successfully" };
    }
  } catch (err) {
    console.log(err);
  }
};
