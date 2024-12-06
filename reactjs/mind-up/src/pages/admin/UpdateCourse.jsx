import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getCourseById,
  updateCourse,
  uploadCoursebanner,
} from "../../services/course.service";
import toast from "react-hot-toast";
import { FileInput, Label } from "flowbite-react";
import { FaBook } from "react-icons/fa";
import MyRichTextEditor from "../../components/MyRichTextEditor";
import { useParams } from "react-router-dom";

const UpdateCourseComp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { courseId } = useParams();

  const [longDesc, setLongDesc] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch course details on component load
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const course = await getCourseById(courseId);
        setValue("title", course.title);
        setValue("shortDesc", course.shortDesc);
        setValue("price", course.price);
        setValue("discount", course.discount);
        setValue("live", course.live);
        setLongDesc(course.long_description);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch course details");
        console.log(error);
      }
    };

    fetchCourse();
  }, [courseId, setValue]);

  const validateLongDesc = () => {
    if (!longDesc || longDesc.trim() === "<p><br></p>") {
      setError("longDesc", {
        type: "manual",
        message: "Long description is required",
      });
      return false;
    } else {
      clearErrors("longDesc");
      return true;
    }
  };

  const uploadBanner = async (banner, courseId) => {
    try {
      await uploadCoursebanner(courseId, banner);
      toast.success("Banner updated successfully");
    } catch (error) {
      toast.error("Failed to upload banner");
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    if (!validateLongDesc()) return;

    try {
      const updatedData = { ...data, long_description: longDesc };
      await updateCourse(updatedData, courseId);
      toast.success("Course updated successfully");

      if (data.bannerFile?.[0]) {
        await uploadBanner(data.bannerFile[0], courseId);
      }
    } catch (error) {
      toast.error("Error updating the course");
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading course details...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <div className="flex items-center mb-4">
          <FaBook size={24} className="text-blue-600 dark:text-blue-400" />
          <h2 className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">
            Update:  <span className="font-bold">{getValues("title")}</span>
          </h2>
        </div>
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
            <MyRichTextEditor
              value={longDesc}
              onChange={setLongDesc}
              placeholder="Enter long description"
            />
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
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourseComp;
