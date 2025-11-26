import express from "express";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controller/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthnticated, createOrder);
orderRouter.get(
  "/get-orders",
  isAuthnticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
