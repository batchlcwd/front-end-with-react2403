import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../services/course.service";
import { Helmet } from "react-helmet";

const SingleViewCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  async function getCourse() {
    const course = await getCourseById(courseId);
    console.log(course);
    setCourse(course);
  }
  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
      <Helmet>
        <title>{course?.title}</title>
      </Helmet>
      <div className="w-full lg:w-2/3 py-8 mx-auto">
        <h1>Single View Course</h1>
        <p>courseId: {courseId}</p>
      </div>
    </>
  );
};

export default SingleViewCourse;
