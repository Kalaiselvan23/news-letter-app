// "use server"
import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

export const connectDb = async () => {
  try {
    console.log(  process.env.ASTRA_DB_ENDPOINT!,
      process.env.ASTRA_DB_TOKEN!)
    const uri = createAstraUri(
      process.env.ASTRA_DB_ENDPOINT!,
      process.env.ASTRA_DB_TOKEN!
    );

    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    mongoose.set("autoCreate", true);
    mongoose.setDriver(driver);

    await mongoose
      .connect(uri, {
        isAstra: true,
      })
      .then((res) => {
        console.log("connected");
      })
      .catch((r) => {
        console.log("unable to connect",r);
      });
  } catch (error) {
    console.log(error)
    console.log("Connection error");
  }
};
