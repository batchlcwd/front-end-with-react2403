import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CategoryView = ({ cat }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (cat.title.toUpperCase() === "ALL") {
          navigate("/dashboard/store");
        } else {
          navigate("/dashboard/store/category/" + cat.id);
        }
      }}
      className=" bg-gray-200 hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-600 dark:bg-gray-700 p-4 rounded-lg w-full  md:w-[calc(50%-12px)]  lg:w-[calc(33%-12px)]  xl:w-[calc(25%-12px)]"
    >
      <h1 className="font-semibold ">{cat.title}</h1>
      <p>{cat.desc}</p>
    </div>
  );
};

export default CategoryView;
