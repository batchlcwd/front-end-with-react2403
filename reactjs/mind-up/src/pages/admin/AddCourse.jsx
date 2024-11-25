import React from "react";
import AddCourseComp from "../../components/admin/AddCourseComp";
import { Helmet } from "react-helmet";

const AddCourse = () => {
  return (
    <div>
      <Helmet>
        <title>Add Course</title>
      </Helmet>
      <AddCourseComp />
    </div>
  );
};

export default AddCourse;
