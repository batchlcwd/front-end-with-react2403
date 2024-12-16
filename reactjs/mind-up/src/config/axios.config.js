import axios from "axios";
import { getUserLoginData } from "../helpers/LocalStorageHelper";
import toast from "react-hot-toast";

export const baseUrl = import.meta.env.VITE_API_URL;

export const publicAxios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export const privateAxios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

publicAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // Customize error handling based on status codes
      switch (status) {
        case 400:
          toast.error(data.message || "Bad Request");
          break;
        case 401:
          toast.error("Unauthorized. Please log in again.");
          // Optional: Redirect to login
          window.location.href = "/login";
          break;
        case 404:
          toast.error("Resource not found.");
          break;
        case 500:
          toast.error("Server error. Please try again later.");
          break;
        default:
          toast.error(data.message || "An error occurred.");
      }
    } else if (error.request) {
      // Request was made but no response was received
      toast.error("No response from server. Please check your network.");
    } else {
      // Something happened while setting up the request
      toast.error(error.message || "An unknown error occurred.");
    }

    return Promise.reject(error);
  }
);

privateAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // Customize error handling based on status codes
      switch (status) {
        case 400:
          toast.error(data.message || "Bad Request");
          break;
        case 401:
          toast.warning("Unauthorized. Please log in again.");
          // Optional: Redirect to login
          window.location.href = "/login";
          break;
        case 404:
          toast.error("Resource not found.");
          break;
        case 500:
          toast.error("Server error. Please try again later.");
          break;
        default:
          toast.error(data.message || "An error occurred.");
      }
    } else if (error.request) {
      // Request was made but no response was received
      toast.error("No response from server. Please check your network.");
    } else {
      // Something happened while setting up the request
      toast.error(error.message || "An unknown error occurred.");
    }

    return Promise.reject(error);
  }
);

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
