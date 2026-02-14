import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";

dotenv.config();

const app = express();

connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!!`);
});