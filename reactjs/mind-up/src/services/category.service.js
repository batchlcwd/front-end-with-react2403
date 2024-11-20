import { privateAxios } from "../config/axios.config";

//create category api call
export const createCategory = async (category) => {
  const result = await privateAxios.post("/categories", category);
  return result.data;
};

//get all categories api call
export const getAllCategories = async (pageSize = 50, pageNumber = 0) => {
  const result = await privateAxios.get(
    `/categories?pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
  );
  return result.data;
};

// delete the service
export const deleteCategory = async (categoryId) => {
  const result = await privateAxios.delete(`/categories/${categoryId}`);
  return result.data;
};

//update category api call
export const updateCategory = async (categoryId, category) => {
  const result = await privateAxios.put(`/categories/${categoryId}`, category);
  return result.data;
};

//get category by id api call
export const getCategoryById = async (categoryId) => {
  const result = await privateAxios.get(`/categories/${categoryId}`);
  return result.data;
};
