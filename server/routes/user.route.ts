import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  registerationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateUser,
  updateUserProfilePicture,
} from "../controller/user.controller";
import { isAuthnticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registerationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthnticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthnticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", isAuthnticated, updateUser);
userRouter.put("/update-user-password", isAuthnticated, updatePassword);
userRouter.put("/update-user-avatar", isAuthnticated, updateUserProfilePicture);

export default userRouter;
