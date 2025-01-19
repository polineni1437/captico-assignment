import React, { useState } from 'react'
import sample_image from "@/assets/login.png"
import { Edit, Trash } from 'lucide-react'
import axios from 'axios'
import { toast } from '@/hooks/use-toast';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";

const SERVER_URL = import.meta.env.VITE_API_URL;

const CourseCard = ({ course }) => {
    const token = localStorage.getItem('token');
    const [courseName, setCourseName] = useState(course.courseName);
    const [courseDescription, setCourseDescription] = useState(course.courseDescription);

    const handleCourseDelete = async() => {
        try {
            console.log(course._id);
            const response = await axios.delete(`${SERVER_URL}/api/course/delete-course/${course._id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response.data);
            toast({
                title: "Course Deleted",
                variant: "success"
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    const updateCourse = async() => {
        try {
            const response = await axios.put(`${SERVER_URL}/api/course/update-course/${course._id}`, {
                courseName: courseName,
                courseDescription: courseDescription
            }, { headers: {
                "Authorization": `Bearer ${token}`
            } });

            toast({
                title: "Course Updated",
                variant: "success"
            });

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-80 rounded-2xl bg-white border shadow-sm p-2'>
        <img src={sample_image} alt="sample image" className='rounded-lg w-80' />
        <div className='flex items-center justify-between'>
            <div>
            <h3 className='text-lg font-semibold mt-3 px-2'>{course?.courseName}</h3>
            <h3 className='text-xs  text-neutral-500 px-2 mb-2'>{course?.courseDescription}</h3>
            </div>
            <div className='flex items-center justify-center gap-5 z-10'>
            <AlertDialog>
              <AlertDialogTrigger>
            <Edit size={18} className='cursor-pointer z-10' />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Update Course</AlertDialogTitle>
                  <AlertDialogDescription className="flex flex-col gap-5 mt-5">
                    <input type="text" className="w-full py-2 px-5 rounded-xl border" placeholder="Course Title" required value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                    <input type="text" className="w-full py-2 px-5 rounded-xl border" placeholder="Course Description" required value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={updateCourse}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Trash size={18} onClick={handleCourseDelete} className='text-red-600 cursor-pointer z-10' />
            </div>
        </div>
    </div>
  )
}

export default CourseCard