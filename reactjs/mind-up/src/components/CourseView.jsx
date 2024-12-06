import React from "react";
import ImageWithFallback from "./ImageWithFallback";
import HtmlRenderer from "./HtmlRenderer";
import { getPriceAfterDiscount } from "./Guest/CourseView";
import { timeAgo } from "../helpers/TimeHelper";

const CourseView = ({ courseToDisplay, userView = true }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <ImageWithFallback
        src={courseToDisplay?.bannerUrl}
        alt={courseToDisplay?.title}
        fallbackSrc={
          "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg"
        }
        className="w-full rounded max-h-96 object-cover"
      />

      <div className="w-full flex flex-col gap-3 p-4">
        <h1 className="font-bold text-xl">{courseToDisplay?.title}</h1>
        <p>{courseToDisplay?.shortDesc}</p>

        <p className="p-10 rounded-lg bg-gray-200 dark:bg-gray-600 ">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Course Description
          </h1>
          <HtmlRenderer htmlContent={courseToDisplay?.long_description} />
        </p>

        {/* live , course and discount */}

        <div className=" w-full mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Price Details
          </h1>

          {/* Price */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              ₹ {courseToDisplay?.price.toFixed(2)}
            </span>
          </div>

          {/* Discount */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Discount:
            </span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {courseToDisplay?.discount}%
            </span>
          </div>

          {/* Live Status */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Status:
            </span>
            <span
              className={`text-lg font-semibold ${
                courseToDisplay?.live
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {courseToDisplay?.live ? "Live" : "Offline"}
            </span>
          </div>

          {/* Created Date */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Created Date:
            </span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {timeAgo(courseToDisplay?.createdDate)}
            </span>
          </div>

          {/* Final Price */}
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Final Price:</h2>
            <p className="text-xl font-bold">
              ₹
              {getPriceAfterDiscount(
                courseToDisplay?.price,
                courseToDisplay?.discount
              )}
            </p>
          </div>
        </div>

        {/* course information apne style mein design karoge */}
      </div>
    </div>
  );
};

export default CourseView;
