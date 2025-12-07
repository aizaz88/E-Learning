import express from "express";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
import {
  getNotifications,
  updateNotificationStatus,
} from "../controller/notification.controller";
const notificationRouter = express.Router();

notificationRouter.get(
  "/get-all-notifications",
  updateNotificationStatus,
  isAuthnticated,
  authorizeRoles("admin"),
  getNotifications
);

notificationRouter.put(
  "/update-notification",
  updateNotificationStatus,
  isAuthnticated,
  authorizeRoles("admin"),
  updateNotificationStatus
);
export default notificationRouter;
