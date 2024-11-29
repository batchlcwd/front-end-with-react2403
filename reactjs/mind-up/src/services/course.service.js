import { privateAxios } from "../config/axios.config";

export const addCourse = async (course) => {
  const response = await privateAxios.post("/courses", course);
  return response.data;
};

// get all courses
export const getAllCourses = async (
  page = 0,
  size = 50,
  sort = "createdDate,desc"
) => {
  const response = await privateAxios.get(
    `/courses?page=${page}&size=${size}&sort=${sort}`
  );
  return response.data;
};


//single course view
export const getCourseById = async (id) => {
  const response = await privateAxios.get(`/courses/${id}`);
  return response.data;
};

//update course

export const updateCourse = async (course, id) => {
  const response = await privateAxios.put(`/courses/${id}`, course);
  return response.data;
};

//delete

export const deleteCourse = async (id) => {
  const response = await privateAxios.delete(`/courses/${id}`);
  return response.data;
};

export const uploadCoursebanner = async (courseId, banner) => {
  let formData = new FormData();
  formData.append("banner", banner);
  const response = await privateAxios.post(
    `/courses/${courseId}/banners`,
    formData
  );
  return response.data;
};
