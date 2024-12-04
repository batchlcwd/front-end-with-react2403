import React from "react";

const CategoryView = ({ cat }) => {
  return (
    <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-600 dark:bg-gray-700 p-4 rounded-lg w-full  md:w-[calc(50%-12px)]  lg:w-[calc(33%-12px)]  xl:w-[calc(25%-12px)]">
      <h1 className="font-semibold ">{cat.title}</h1>
      <p>{cat.desc}</p>
    </div>
  );
};

export default CategoryView;
