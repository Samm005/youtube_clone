import express from "express";
import {UnSuscribe,Suscribe } from "../controllers/channelController.js";

const router = express.Router();

//Suscribe a channel
router.put("/suscribe/:id",Suscribe);

//UnSuscribe a channel
router.put("/unsuscribe/:id",UnSuscribe);

export default router;