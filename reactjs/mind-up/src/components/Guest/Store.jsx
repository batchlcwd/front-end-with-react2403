import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../services/course.service";
import CourseView from "./CourseView";
import { Spinner } from "flowbite-react";

const Store = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadAllCourses() {
    setLoading(true);
    const courseData = await getAllCourses();
    console.log(courseData);
    setCourseData(courseData);
    setLoading(false);
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
        {courseData?.content.map((course, index) => (
          <CourseView key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Store;
