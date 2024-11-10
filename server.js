import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "server is ready now" });
});

app.listen(5000, () => {
  console.log(`server started at http://localhost:5000/`);
});
