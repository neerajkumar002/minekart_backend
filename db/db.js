import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectDB = async () => {
  try {    
    await mongoose.connect(config.mongoDbUrl);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log(`Error :: ${error.message}`);
    process.exit(1);
  }
};
