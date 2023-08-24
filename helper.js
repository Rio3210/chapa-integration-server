import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/chapa-integration", {
      useNewUrlParser: true,
    });
    console.log("Connected to db");
    return connection;
  } catch (error) {
    console.log(error);
    throw error;
  }
};