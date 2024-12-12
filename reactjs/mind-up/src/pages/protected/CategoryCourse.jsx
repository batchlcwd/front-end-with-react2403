import React from "react";
import { Helmet } from "react-helmet";
import Categories from "../../components/Guest/Categories";
import { useParams } from "react-router-dom";

const CategoryCourse = () => {
  const { categoryId } = useParams();
  // useeffect ke ander 
  //load the courses of cartegory
  return (
    <div>
      <Helmet>
        <title>Product Store</title>
      </Helmet>
      <div>
        <Categories />
        <div className="p-10">
          <h3>{categoryId}</h3>
          <p>Courses of above category</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCourse;
