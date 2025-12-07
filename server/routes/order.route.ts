import express from "express";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controller/order.controller";
import { updateAccessToken } from "../controller/user.controller";
const orderRouter = express.Router();

orderRouter.post(
  "/create-order",
  updateAccessToken,
  isAuthnticated,
  createOrder
);
orderRouter.get(
  "/get-orders",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
