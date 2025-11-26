import express from "express";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestionToCourse,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  getAllCourses,
  getAllCoursesAdmin,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controller/course.controller";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthnticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAuthnticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id", isAuthnticated, getCourseByUser);
courseRouter.put("/add-question", isAuthnticated, addQuestionToCourse);
courseRouter.put("/add-answer", isAuthnticated, addAnswer);
courseRouter.put("/add-review/:id", isAuthnticated, addReview);

courseRouter.put(
  "/add-reply",
  isAuthnticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.get(
  "/get-courses-admin",
  isAuthnticated,
  authorizeRoles("admin"),
  getAllCoursesAdmin
);
courseRouter.delete(
  "/delete-course/:id",
  isAuthnticated,
  authorizeRoles("admin"),
  deleteCourse
);
export default courseRouter;
