import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../services/category.service";
import CategoryView from "./CategoryView";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState(null);

  async function loadCategories() {
    const catData = await getAllCategories();
    console.log(catData);
    setCategoriesData(catData);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="px-8 ">
      <h1 className="text-xl  font-bold">Categories</h1>
      <div className="flex flex-col md:flex-row gap-3 mt-4 flex-wrap">
        <CategoryView
          cat={{
            title: "All",
            id: 12,
            desc: "This category contains all courses",
          }}
        />
        {categoriesData?.content.map((cat, index) => (
          <CategoryView key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
