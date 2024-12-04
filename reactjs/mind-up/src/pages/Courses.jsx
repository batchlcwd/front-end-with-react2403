import React from "react";
import Store from "../components/Guest/Store";
import { Helmet } from "react-helmet";
import Categories from "../components/Guest/Categories";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <div className="w-full lg:w-2/3 py-8 mx-auto">
        <Categories />
        <Store />
      </div>
    </>
  );
};

export default Courses;
