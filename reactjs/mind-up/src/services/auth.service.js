import { publicAxios } from "../config/axios.config";

//register[create new usesr]
export const createUser = async (userObject) => {
  //http://localhost:8000/api/v1/users
  //POST
  const result = await publicAxios.post("/users", userObject);
  return result.data;
};

//login api
export const loginUser = async (loginData) => {
  const result = await publicAxios.post("/auth/login", loginData);
  return result.data;
};
