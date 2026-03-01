import express from "express";
import {UnSuscribe,Suscribe } from "../controllers/channelController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

//Suscribe a channel
router.put("/suscribe/:id",verifyToken, Suscribe);

//UnSuscribe a channel
router.put("/unsuscribe/:id",verifyToken,UnSuscribe);

export default router;