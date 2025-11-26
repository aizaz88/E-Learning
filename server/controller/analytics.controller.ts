import { Request, Response, NextFunction } from "express";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import { generate12MonthsData } from "../utils/analytics";
import userModel from "../model/user.model";
import CourseModel from "../model/course.model";
import OrderModel from "../model/order.model";

//get user analytics ---admin
export const getUserAnalytics = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await generate12MonthsData(userModel);

      res.status(201).json({
        success: true,
        users,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 401));
    }
  }
);

//get courses analytics ---admin
export const getCourseAnalytics = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courses = await generate12MonthsData(CourseModel);

      res.status(201).json({
        success: true,
        courses,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 401));
    }
  }
);

//get orders analytics ---admin
export const getOrderAnalytics = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await generate12MonthsData(OrderModel);

      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 401));
    }
  }
);
