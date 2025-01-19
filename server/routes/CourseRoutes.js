import { Router } from "express";
import { createCourse, deleteCourse, getCourse, updateCourse } from "../controllers/CourseController.js";
import authMiddlware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/create-course', authMiddlware, createCourse);
router.get('/:id', authMiddlware, getCourse);
router.put('/update-course/:id', authMiddlware, updateCourse);
router.delete('/delete-course/:id', authMiddlware, deleteCourse);

export default router;