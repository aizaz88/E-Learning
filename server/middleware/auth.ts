require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import { catchAsyncErrors } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redis } from "../utils/redis";

export const isAuthnticated = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const acccess_token = req.cookies.acccess_token as string;
    if (!acccess_token) {
      return next(new ErrorHandler("please login to access resource", 400));
    }

    const decoded = jwt.verify(
      acccess_token,
      process.env.ACCESS_TOKEN as string
    ) as JwtPayload;
    if (!decoded) {
      return next(new ErrorHandler("access token is not valid ", 400));
    }

    const user = await redis.get(decoded.id);
    if (!user) {
      return next(new ErrorHandler("user not found", 400));
    }

    req.user = JSON.parse(user);
    next();
  }
);
