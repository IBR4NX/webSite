import axios from "axios";
import {API}  from "../config";

const api = axios.create({
  baseURL:API.base+API.api ,
  headers: {
    "Content-Type": "application/json",
  },
});
// Optional: لدعم Auth مستقبلًا
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Error Handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;