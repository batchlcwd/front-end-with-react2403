import React, { useEffect, useState } from "react";
import {
  getAllCourses,
  getCourseById,
  getLiveCourses,
} from "../../services/course.service";
import CourseView from "./CourseView";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { getOrdersByUserIdAndStatus } from "../../services/order.service";

const Store = () => {
  const { user } = useAuth();
  const [myCourses, setMyCourses] = useState([]);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(false);

  //load user if user is logged in
  useEffect(() => {
    if (user) {
      async function loadUserCourses() {
        const response = await getOrdersByUserIdAndStatus(user.userId);
        setMyCourses(response);
      }

      loadUserCourses();
    }
  }, [user]);

  async function loadAllCourses() {
    try {
      setLoading(true);
      const courseData = await getLiveCourses();
      console.log(courseData);
      setCourseData(courseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Error in loading courses");
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAllCourses();
  }, []);

  return (
    <div className="main_store_container p-8">
      <h1 className="text-xl font-bold">Courses</h1>

      {loading && (
        <div className="flex flex-col gap-2  items-center justify-center ">
          <Spinner size="xl" color="success" />
          <p className="text-lg">Loading...</p>
        </div>
      )}

      <div className="course_container mt-5 flex flex-col justify-center md:flex-row  gap-3 flex-wrap">
        {courseData?.content.map((course, index) => {
          const isMyCourse = myCourses.some(
            (order) => order.course.id == course.id
          );
          return isMyCourse ? "" : <CourseView key={index} course={course} />;
        })}
      </div>
    </div>
  );
};

export default Store;
