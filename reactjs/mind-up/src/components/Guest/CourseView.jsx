import { Badge, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export function getPriceAfterDiscount(price, discount) {
  return (price - (price * discount) / 100).toFixed(0);
}
const CourseView = ({ course }) => {
  return (
    <div className="w-full hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-600  md:w-[calc(50%-12px)]  lg:w-[calc(33%-12px)]  xl:w-[calc(25%-12px)]   flex flex-col gap-3 bg-gray-200 dark:bg-gray-700 rounded-lg">
      <div className="image_container">
        <img
          className="w-full max-h-80 object-cover"
          src={course.bannerUrl}
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col justify-between  h-full gap-3">
        <h1 className="font-semibold text-normal md:text-xl">{course.title}</h1>
        <p>{course.shortDesc}</p>
        <div className="flex  gap-2 items-center">
          <p className="font-bold text-gray-400 text-xl line-through">
               {course.price}
          </p>
          <p>
            <Badge color="info">{course.discount}% Off</Badge>
          </p>
          <p className="font-bold text-green-100 text-xl ">
            ₹ {getPriceAfterDiscount(course.price, course.discount)}
          </p>
        </div>

        <div className="mt-4 flex gap-2 justify-center">
          <Button size="sm">Buy Now</Button>
          <Button as={Link} to={`/courses/${course.id}`} size="sm" color="dark">
            View Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
