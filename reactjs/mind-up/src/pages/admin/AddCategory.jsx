import React from "react";
import { Helmet } from "react-helmet";
import { FaTag, FaAlignLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createCategory } from "../../services/category.service";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // on submit method
  const onSubmit = async (data) => {
    console.log(data);
    //going to call server to create category
    try {
      //server call
      const response = await createCategory(data);
      console.log(response);
      toast.success("Category created successfully");
      navigate("/admin/categories");
    } catch (error) {
      toast.error("Error while creating category");
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Category </title>
      </Helmet>
      <div className="flex flex-col mt-10 items-center justify-center p-6 max-w-md mx-auto rounded-lg shadow-md bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Add New Category</h2>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Title Field */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium mb-2 flex items-center"
            >
              <FaTag className="mr-2" /> Title
            </label>
            <div className="relative">
              <input
                {...register("title", {
                  required: "Title is Required !",
                })}
                type="text"
                id="title"
                placeholder="Enter category title"
                className="w-full p-3 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-400 py-2 block px-2">
                  {errors.title.message}
                </span>
              )}
            </div>
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2 flex items-center"
            >
              <FaAlignLeft className="mr-2" /> Description
            </label>
            <textarea
              {...register("desc", {
                required: "Description is Required !",
              })}
              id="description"
              placeholder="Enter category description"
              rows="4"
              className="w-full p-3 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
            {errors.desc && (
              <span className="text-red-400 py-2 block px-2">
                {errors.desc.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring focus:ring-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-300"
          >
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
