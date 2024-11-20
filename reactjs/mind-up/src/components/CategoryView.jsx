import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { Button, Modal, ToastToggle } from "flowbite-react";
const CategoryView = ({ cat, deleteCategory, openEditModel }) => {
  const defaultBanner =
    "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";

  console.log(cat);

  const [confirmOpenModal, setConfirmOpenModal] = useState(false);

  function deleteConfirmModal() {
    return (
      <Modal
        show={confirmOpenModal}
        size="md"
        onClose={() => setConfirmOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  deleteCategory(cat);
                  setConfirmOpenModal(false);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setConfirmOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <div className="shadow-md  dark:hover:bg-gray-700 dark:border-none border  dark:bg-slate-700 hover:bg-gray-200  cursor-pointer flex flex-col  items-start justify-between   rounded  gap-3 mt-2 w-full lg:w-1/4">
      <div className=" w-full   flex  flex-col justify-start">
        <img
          src={defaultBanner}
          className="w-full h-[250px] object-cover"
          alt=""
        />
        <div className="p-4 flex flex-col gap-3 ">
          <h1 className="text-2xl">{cat.title}</h1>
          <p className="overflow-auto">{cat.desc}</p>
        </div>
      </div>
      <div className="flex p-5 justify-center  w-full  gap-3">
        <Button
          onClick={() => {
            console.log(cat);
            setConfirmOpenModal(true);
          }}
          color="red"
        >
          Delete
        </Button>
        <Button
          size="sm"
          onClick={() => {
            openEditModel(cat);
          }}
        >
          Edit
        </Button>
      </div>
      {deleteConfirmModal()}
    </div>
  );
};

export default CategoryView;
