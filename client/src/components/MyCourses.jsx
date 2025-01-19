import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
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
import { Plus } from "lucide-react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

const SERVER_URL = import.meta.env.VITE_API_URL;

const MyCourses = () => {
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [userCourses, setUserCourses] = useState([]);
    const token = localStorage.getItem('token');

    const CreateCourse = async() => {
        try {
            const response = await axios.post(`${SERVER_URL}/api/course/create-course`, {
                courseName: courseName,
                courseDescription: courseDescription,
            }, { headers: {
                "Authorization": `Bearer ${token}`
            } });
            console.log(response.data);
            setUserCourses((prevCourses) => [...prevCourses, response.data.course]);
            toast({
                title: "Course Created",
                variant: "success"
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getUserCourses = async() => {
        try {
            const response = await axios.get(`${SERVER_URL}/api/course/getUserCourses`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            // console.log(response.data);
            setUserCourses(response.data.courses);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserCourses();
    },[userCourses]);
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold w-1/2">My Courses</h3>
        <div className="lg:z-10">
            <AlertDialog>
              <AlertDialogTrigger>
              <div className="w-32 flex items-center justify-center gap-2 py-2 px-5 rounded-xl bg-white border cursor-pointer">
            <Plus size={15} className="" />
            <h4 className="text-xs text-black font-medium">Create</h4>
          </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Create New Course</AlertDialogTitle>
                  <AlertDialogDescription className="flex flex-col gap-5 mt-5">
                    <input type="text" className="w-full py-2 px-5 rounded-xl border" placeholder="Course Title" required onChange={(e) => setCourseName(e.target.value)} />
                    <input type="text" className="w-full py-2 px-5 rounded-xl border" placeholder="Course Description" required onChange={(e) => setCourseDescription(e.target.value)} />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={CreateCourse}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>
      </div>
      <div >
       {userCourses.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 mt-5">
            {userCourses.map((course, index) => (
                <div key={index}>
                    <CourseCard course={course} />
                </div>
            ))}
        </div>
       ) : (
        <h3>No Courses Found!</h3>
       )}
      </div>
    </div>
  );
};

export default MyCourses;
