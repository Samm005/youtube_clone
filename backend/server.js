import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/commentRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

connect();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/channels", channelRoutes);
app.use("/api/videos", videoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!!`);
});