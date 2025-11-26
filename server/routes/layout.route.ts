import express from "express";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controller/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthnticated,
  authorizeRoles("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  isAuthnticated,
  authorizeRoles("admin"),
  editLayout
);
layoutRouter.get("/get-layout/:type", getLayoutByType);
export default layoutRouter;
