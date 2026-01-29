import axios from "axios";
//<##☆##> api <##☆##> 
const API_URL = "http://localhost:3000";
const API = {
  base: "http://localhost:3000",
  api: "/api",
  info: "/video/info",
  download: "/video/download",
  merge: "/video/merge",
  user_info: "/user/info",
  login: "/user/login",
  auth_login: "/auth/login",
};
const api = axios.create({
  baseURL:API_URL ,
  headers: {
    "Content-Type": "application/json",
  },
});
// Optional: لدعم Auth مستقبلًا
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `${token}`;
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

export const post=(url:string,req:any)=> api.post(url,req);
export async function apiPost(url:string,req:any) {
  console.log(req);
  const res = await api.post(url, req);
  return res;
}
export default  apiPost;
export {API, API_URL,api }
