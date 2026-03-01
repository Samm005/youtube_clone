import express from "express";
import { addVideo,updateVideo,deleteVideo,getVideo} from "../controllers/videoController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",verifyToken, addVideo);

router.put("/:id",verifyToken, updateVideo);

router.delete("/:id",verifyToken, deleteVideo);

router.get("/find/:id", getVideo);

export default router;