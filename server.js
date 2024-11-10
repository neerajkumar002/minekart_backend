import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  return res.json({ message: "server is ready now" });
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:5000/`);
});
