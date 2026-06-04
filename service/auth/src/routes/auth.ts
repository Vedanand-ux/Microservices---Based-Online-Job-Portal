import express from "express";
import { registerUser } from "../controllers/auth.js";
import uploadFile from "../middlerware/multer.js";

const router = express.Router();

router.post("/register",uploadFile, registerUser);


export default router;