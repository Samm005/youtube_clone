import express from "express";
import {signup,signin } from "../controllers/authController.js";

const router = express.Router();

//Create a user
router.post("/signup",signup)

//Login a user
router.post("/signin",signin)

export default router;