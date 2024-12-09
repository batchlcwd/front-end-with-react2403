import axios from "axios";
import { getUserLoginData } from "../helpers/LocalStorageHelper";

export const baseUrl = "http://localhost:8081/api/v1";

export const publicAxios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export const privateAxios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

privateAxios.interceptors.request.use(
  function (config) {
    const token = getUserLoginData().token;
    // console.log(token);

    if (token) {
      // if token is expired:
      //all api to refresh token
      //update it in global state and local storage
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
