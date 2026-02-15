import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();

connect();

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!!`);
});