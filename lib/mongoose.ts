import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    if (isConnected) {
      console.log("MongoDB is already connected");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "bali",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
