import express from "express";
import { update,Delete,likeVideo,dislikeVideo,getUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

//Update a user
router.put("/:id",verifyToken,update);

//Delete a user
router.delete("/:id",verifyToken,Delete);

//Get a user
router.get("/find/:id",getUser);

//Like a video
router.put("/like/:videoId",verifyToken,likeVideo);

//Dislike a video
router.put("/dislike/:videoId",verifyToken,dislikeVideo);

export default router;