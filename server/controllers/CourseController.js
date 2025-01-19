import Course from "../models/CourseModel.js";

const createCourse = async(req,res) => {
    try {
        const { courseName, courseDescription } = req.body;
        const user = req.user

        if(!courseName || !courseDescription) throw new Error("All Fields Are Required");

        const course = new Course({
            courseName,
            courseDescription,
            instructor: user.id
        });
        course.save();
        return res.status(201).json({ success: true, message: "Course Created", course });
    } catch (error) {
        return res.status(500).json({ success: false, Error: error.message });
    }
}

const getCourse = async(req,res) => {
    try {
        const { id } = req.params;
        if(!id) throw new Error("Course Id is required");

        const course = await Course.findById(id);
        return res.status(200).json({ success: true, course });

    } catch (error) {
        return res.status(500).json({ success: false, Error: error.message });
    }
}

const updateCourse = async(req,res) => {
    try {
        const {id} = req.params;
        if(!id) throw new Error("Course Id is required");

        const updateCourse = await Course.findByIdAndUpdate(id, req.body);
        
        const updatedCourse = await Course.findById(id);
        
        return res.status(200).json({ success: true, message: "Course Updated", updatedCourse });
        
    } catch (error) {
        return res.status(500).json({ success: false, Error: error.message });
    }
}

const deleteCourse = async(req,res) => {
    try {
        const {id} = req.params;
        if(!id) throw new Error("Course Id is required");

        const deleteCourse = await Course.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Course Deleted" });
    } catch (error) {
        return res.status(500).json({ success: false, Error: error.message });

    }
}

export { createCourse, getCourse, updateCourse, deleteCourse };