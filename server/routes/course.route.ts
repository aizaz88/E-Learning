import express from "express";
import { authorizeRoles, isAuthnticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestionToCourse,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAllAdminCourses,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controller/course.controller";
import { updateAccessToken } from "../controller/user.controller";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get(
  "/get-admin-courses",
  isAuthnticated,
  authorizeRoles("admin"),
  getAllAdminCourses
);

courseRouter.get(
  "/get-course-content/:id",
  updateAccessToken,
  isAuthnticated,
  getCourseByUser
);
courseRouter.put(
  "/add-question",
  updateAccessToken,
  isAuthnticated,
  addQuestionToCourse
);
courseRouter.put("/add-answer", updateAccessToken, isAuthnticated, addAnswer);
courseRouter.put(
  "/add-review/:id",
  updateAccessToken,
  isAuthnticated,
  addReview
);

courseRouter.put(
  "/add-reply",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);
courseRouter.delete(
  "/delete-course/:id",
  updateAccessToken,
  isAuthnticated,
  authorizeRoles("admin"),
  deleteCourse
);
export default courseRouter;
