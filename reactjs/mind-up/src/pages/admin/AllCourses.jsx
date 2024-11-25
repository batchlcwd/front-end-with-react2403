import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Pagination } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { getAllCourses } from "../../services/course.service";
import { timeAgo } from "../../helpers/TimeHelper";
import { PAGE_SIZE } from "../../helpers/constants";
const AllCourses = () => {
  const [courseData, setCourseData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  async function getCourses(page, size, sort) {
    try {
      const data = await getAllCourses(page, size, sort);
      console.log(data);
      setCourseData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const onPageChange = (page) => {
    console.log(page);
    // load the page data from the api
    getCourses(page - 1, PAGE_SIZE, "createdDate,desc");
  };

  useEffect(() => {
    getCourses(0, PAGE_SIZE, "createdDate,desc");
  }, []);

  return (
    <div>
      <Helmet>
        <title>All Courses</title>
      </Helmet>
      <div className="p-4">
        {/* courses table */}
        <div className="p-4">Courses : {courseData?.totalElements}</div>
        {courseData && (
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Live</Table.HeadCell>
                <Table.HeadCell>Discount</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {courseData.content.map((course, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{course.title}</Table.Cell>
                    <Table.Cell>
                      {course.categoryList.length <= 0
                        ? "none"
                        : course.categoryList[0].name}
                    </Table.Cell>
                    <Table.Cell>₹ {course.price} </Table.Cell>
                    <Table.Cell>{course.live ? "Live" : "Not Live"}</Table.Cell>
                    <Table.Cell>{course.discount} %</Table.Cell>
                    <Table.Cell>{timeAgo(course.createdDate)}</Table.Cell>
                    {/* <Table.Cell>
                      <Checkbox defaultChecked={true} />
                    </Table.Cell> */}
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="ml-3 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        View
                      </a>
                      <a
                        href="#"
                        className="ml-3 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Delete
                      </a>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <div className="flex mt-8 overflow-x-auto sm:justify-center">
              <Pagination
                layout="table"
                currentPage={courseData?.number + 1}
                totalPages={courseData?.totalPages}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
