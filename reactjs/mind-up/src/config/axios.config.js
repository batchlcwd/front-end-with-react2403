import axios from "axios";

const baseUrl = "http://localhost:8081/api/v1";

export const publicAxios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});
