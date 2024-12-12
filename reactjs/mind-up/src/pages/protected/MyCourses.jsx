import React, { useEffect, useState } from "react";
import { getOrdersByUserIdAndStatus } from "../../services/order.service";
import { useAuth } from "../../context/AuthContext";
import CourseView from "../../components/Guest/CourseView";
import { Helmet } from "react-helmet";

const MyCourses = () => {
  const { user } = useAuth();
  const [myCourses, setMyCourses] = useState([]);
  async function loadCourses() {
    const response = await getOrdersByUserIdAndStatus(user.userId);
    console.log(response);
    setMyCourses(response);
  }

  useEffect(() => {
    console.log(user);
    if (user) {
      loadCourses();
    }
  }, [user]);

  return (
    <div className=" px-8 py-6">
      <Helmet>
        <title>My Courses</title>
      </Helmet>
      <h1 className="text-xl font-bold">My Courses</h1>
      <div className="course_container  mt-5 flex flex-col  md:flex-row  gap-3 flex-wrap">
        {myCourses.map((course, index) => (
          <CourseView my={true} key={index} course={course.course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
