import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    instructor:  {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Course = new mongoose.model('Course', CourseSchema);

export default Course;
