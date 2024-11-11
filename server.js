import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { config } from "./config/config.js";
dotenv.config();
import productRoute from "./routes/product.route.js";

const app = express();
const PORT = config.port;

//middelwares
app.use(express.json()); // this middelware allow us to accept json data in the req.body

app.get("/", (req, res) => {
  return res.json({ message: "server is ready now" });
});

//register routes
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  //connect database
  connectDB();
  console.log(`server started at http://localhost:5000/`);
});
