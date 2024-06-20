import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/login", loginUser)
userRouter.post("/createUser", createUser)


export default userRouter