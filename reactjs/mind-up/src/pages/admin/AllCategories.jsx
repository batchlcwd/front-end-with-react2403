import { Button, Modal, ToastToggle } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaTag, FaAlignLeft } from "react-icons/fa";
import {
  getAllCategories,
  deleteCategory as deleteCategoryAPI,
  updateCategory,
} from "../../services/category.service";
import CategoryView from "../../components/CategoryView";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryResponse, setCategoryResponse] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //first time execution
  useEffect(() => {
    loadAllCategories();
  }, []);

  async function loadAllCategories() {
    const categoryResponse = await getAllCategories(1000);
    console.log(categoryResponse);
    setCategories(categoryResponse.content);
    setCategoryResponse(categoryResponse);
  }

  const deleteCategory = async (cat) => {
    // delete code
    console.log("deleting category");
    try {
      const result = await deleteCategoryAPI(cat.id);
      console.log(result);
      const newCateogies = categories.filter((item) => item.id !== cat.id);
      setCategories(newCateogies);
      toast.success("Category Deleted");
    } catch (error) {
      console.log(error);
      console.log("Error in deleting Category");
    }
  };

  //function to open modal
  function openEditModel(cat) {
    setOpenModal(true);
    setCategoryToUpdate(cat);
  }

  async function onSubmit() {
    console.log(categoryToUpdate);
    const result = await updateCategory(categoryToUpdate.id, categoryToUpdate);

    const updatedCategories = categories.map((item) => {
      if (item.id == categoryToUpdate.id) {
        return categoryToUpdate;
      }
      return item;
    });

    setCategories(updatedCategories);
    setOpenModal(false);

    toast.success("Category updated !!");
  }

  // edit modal fuction
  function editCategoryModal() {
    return (
      <>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            Edit Category : <span> {categoryToUpdate?.title} </span>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
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
                      defaultValue={categoryToUpdate?.title}
                      {...register("title", {
                        required: "Title is Required !",
                        onChange: (e) => {
                          setCategoryToUpdate({
                            ...categoryToUpdate,
                            title: e.target.value,
                          });
                        },
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
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    name="desc"
                    defaultValue={categoryToUpdate?.desc}
                    {...register("desc", {
                      required: "Description is Required !",
                      onChange: (e) => {
                        setCategoryToUpdate({
                          ...categoryToUpdate,
                          desc: e.target.value,
                        });
                      },
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
                  Update Category
                </button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div>
      <Helmet>
        <title>All Categories</title>
      </Helmet>
      <div className="flex justify-center">
        <Button as={Link} to={"/admin/add-category"} className="" color="blue">
          Add Category
        </Button>
      </div>

      <div className="mt-10">
        {categories.length > 0 && (
          <h1 className="text-center text-lg font-bold">
            All Categories : {categories.length}
          </h1>
        )}

        {categories.length <= 0 && (
          <h1 className="text-3xl font-bold text-center">
            No Categories in Database
          </h1>
        )}

        {/* show all categories */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-5 flex-wrap">
          {categories.map((cat, item) => (
            <CategoryView
              deleteCategory={deleteCategory}
              openEditModel={openEditModel}
              cat={cat}
              key={item}
            />
          ))}
        </div>
      </div>
      {editCategoryModal()}
    </div>
  );
};

export default AllCategories;
