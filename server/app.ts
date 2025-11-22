import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
export const app = express();

// Body parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

// Test API
app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

//Routes
app.use("/api/v1", userRouter);

// Unknown route handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: any = new Error(`Route ${req.originalUrl} not found`);
  err.statusCode = 404;
  next(err);
});

////////////////////
app.use(ErrorMiddleware);
