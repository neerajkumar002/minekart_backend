import dotenv from "dotenv";
dotenv.config();
const conf = {
  mongoDbUrl: process.env.MONGODB_URL,
  port: process.env.PORT,
};

export const config = Object.freeze(conf);
