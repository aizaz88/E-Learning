import express from "express";
import {
  activateUser,
  deleteUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registerationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateUser,
  updateUserProfilePicture,
  updateUserRole,
} from "../controller/user.controller";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registerationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", updateAccessToken, isAuthnticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", updateAccessToken, isAuthnticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put(
  "/update-user-info",
  updateAccessToken,
  isAuthnticated,
  updateUser
);
userRouter.put(
  "/update-user-password",
  updateAccessToken,
  isAuthnticated,
  updatePassword
);
userRouter.put(
  "/update-user-avatar",
  updateAccessToken,
  isAuthnticated,
  updateUserProfilePicture
);
userRouter.get(
  "/get-users",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  getAllUsers
);
userRouter.put(
  "/update-user-role",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  deleteUser
);
export default userRouter;
