import express from "express";
import {signup } from "../controllers/authController.js";

const router = express.Router();

//Create a user
router.post("/signup",signup)

//Login a user
//router.post("/signin",)

export default router;