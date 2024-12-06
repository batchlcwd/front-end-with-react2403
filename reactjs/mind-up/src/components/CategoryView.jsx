import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { Button, Modal, ToastToggle } from "flowbite-react";
const CategoryView = ({ cat, deleteCategory, openEditModel }) => {
  const defaultBanner =
    "https://i.pinimg.com/736x/0b/fa/1d/0bfa1dcd820bbfd821602e04f33cd57e.jpg";

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
    <div className="shadow-md w-full lg:w-[calc(25%-16px)]   dark:hover:bg-gray-700 dark:border-none border  dark:bg-slate-700 hover:bg-gray-200  cursor-pointer flex flex-col  items-start justify-between   rounded  mt-2  ">
      <div className="">
        <img
          src={defaultBanner}
          className="w-full max-h-36  object-cover mx-auto"
          alt=""
        />
        <div className="p-4  flex flex-col gap-3 ">
          <h1 className="font-semibold text-normal md:text-xl">{cat.title}</h1>
          <p className="overflow-auto">{cat.desc}</p>
        </div>
      </div>
      <div className="flex   pb-5 justify-center  w-full  gap-3">
        <Button
          size="sm"
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
