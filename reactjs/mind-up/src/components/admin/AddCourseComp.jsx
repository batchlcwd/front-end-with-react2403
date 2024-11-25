import React from "react";
import { useForm } from "react-hook-form";
import { addCourse, uploadCoursebanner } from "../../services/course.service";
import toast from "react-hot-toast";
import { FileInput, Label } from "flowbite-react";

const AddCourseComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const uploadBanner = async (banner, courseId) => {
    console.log(courseId, banner);
    try {
      await uploadCoursebanner(courseId, banner);
      toast.success("banner updated");
    } catch (error) {
      toast.error("banner uploaded");
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    // console.log("Form Data:", data);

    console.log(data);
    try {
      const course = await addCourse(data);


      toast.success("course added");

      await uploadBanner(data.bannerFile[0], course.id);
      
      reset();
    } catch (error) {
      toast.error("Error in adding data");
      console.log(error);
    }
  };

  return (
    <div className=" mt-10 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-6">
          Add Course
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter course title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Short Description
            </label>
            <input
              type="text"
              {...register("shortDesc", {
                required: "Short description is required",
              })}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter short description"
            />
            {errors.shortDesc && (
              <p className="text-red-500 text-sm mt-1">
                {errors.shortDesc.message}
              </p>
            )}
          </div>

          {/* Long Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Long Description
            </label>
            <textarea
              {...register("longDesc", {
                required: "Long description is required",
              })}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter long description"
              rows="4"
            ></textarea>
            {errors.longDesc && (
              <p className="text-red-500 text-sm mt-1">
                {errors.longDesc.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Price
            </label>
            <input
              type="number"
              {...register("price", { required: "Price is required", min: 0 })}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Live */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                {...register("live")}
                className="mr-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              Live
            </label>
          </div>

          {/* Discount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Discount
            </label>
            <input
              type="number"
              {...register("discount", { min: 0, max: 100 })}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter discount percentage"
            />
            {errors.discount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.discount.message ||
                  "Discount must be between 0 and 100"}
              </p>
            )}
          </div>

          {/* Banner */}
          <div>
            <div id="fileUpload" className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Banner" />
              </div>
              <FileInput
                {...register("bannerFile", {})}
                id="file"
                helperText="Banner is shown on course view page"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseComp;
