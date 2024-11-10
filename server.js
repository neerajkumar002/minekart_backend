import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { config } from "./config/config.js";
dotenv.config();

const app = express();
const PORT = config.port;

app.get("/", (req, res) => {
  return res.json({ message: "server is ready now" });
});

app.listen(PORT, () => {
  //connect database
  connectDB();
  console.log(`server started at http://localhost:5000/`);
});
