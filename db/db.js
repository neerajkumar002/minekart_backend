import mongoose from "mongoose";
import { config } from "../config/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoDbUrl);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log(`Error :: ${error.message}`);
    process.exit(1);
  }
};
