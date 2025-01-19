import { Router } from "express";
import { createCourse, deleteCourse, getCourse, getUserCreatedCourses, updateCourse } from "../controllers/CourseController.js";
import authMiddlware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/create-course', authMiddlware, createCourse);
router.get('/course/:id', authMiddlware, getCourse);
router.get('/getUserCourses', authMiddlware, getUserCreatedCourses);
router.put('/update-course/:id', authMiddlware, updateCourse);
router.delete('/delete-course/:id', authMiddlware, deleteCourse);

export default router;