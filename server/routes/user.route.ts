import express from "express";
import {
  activateUser,
  loginUser,
  logoutUser,
  registerationUser,
} from "../controller/user.controller";
import { isAuthnticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registerationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", isAuthnticated, logoutUser);

export default userRouter;
