import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Pagination, Button, Modal } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { deleteCourse, getAllCourses } from "../../services/course.service";
import { timeAgo } from "../../helpers/TimeHelper";
import { PAGE_SIZE } from "../../helpers/constants";
import CustomConfirmModal from "../../components/CustomConfirmModal";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from "react-hot-toast";
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

  const [confirmDeleteOpenModal, setConfirmDeleteOpenModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  //delete function
  async function callApiToDeleteCourse() {
    try {
      const reponse = await deleteCourse(courseToDelete.id);
      console.log(reponse);

      //remove the course form course ui

      const newCourses = courseData.content.filter(
        (item) => item.id != courseToDelete.id
      );
      setCourseData({ ...courseData, content: newCourses });
      toast.success("courseDeleted");
      setCourseToDelete(null);
    } catch (error) {
      console.log(error);
      toast.error("courseDeleteFailed");
    } finally {
      setConfirmDeleteOpenModal(false);
    }
  }

  //show course details
  const [openCourseModal, setOpenCourseModal] = useState(false);
  const [courseToDisplay, setCourseToDisplay] = useState(null);

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
                        onClick={() => {
                          setCourseToDisplay(course);
                          setOpenCourseModal(true);
                          console.log(course);
                        }}
                      >
                        View
                      </a>
                      <a
                        href="#"
                        onClick={() => {
                          setConfirmDeleteOpenModal(true);
                          setCourseToDelete(course);
                        }}
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
      <CustomConfirmModal
        isOpen={confirmDeleteOpenModal}
        heading={"Delete Course"}
        confirmButtonText="Delete Course"
        declineButtonText="Close"
        confirmButtonClicked={() => {
          callApiToDeleteCourse();
        }}
        closeModal={() => {
          setConfirmDeleteOpenModal(false);
          setCourseToDelete(null);
        }}
        showConfirmButton={true}
        showDeclineButton={true}
      >
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
        </div>
      </CustomConfirmModal>

      {/* show course detial modal */}
      <CustomConfirmModal
        isOpen={openCourseModal}
        heading={`Course Information : ${courseToDisplay?.title} `}
        showConfirmButton={false}
        declineButtonText="Close"
        closeModal={() => {
          setOpenCourseModal(false);
          setCourseToDisplay(null);
        }}
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <img
            src={courseToDisplay?.bannerUrl}
            alt=""
            className="w-full rounded h-80 object-cover"
          />
          <div className=" flex flex-col gap-3 p-4">
            <h1 className="font-bold text-xl">{courseToDisplay?.title}</h1>
            <p>{courseToDisplay?.shortDesc}</p>

            <p>{courseToDisplay?.long_description}</p>

            {/* course information apne style mein design karoge */}
          </div>
        </div>
      </CustomConfirmModal>
    </div>
  );
};

export default AllCourses;
