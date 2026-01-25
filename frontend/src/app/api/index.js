import api from "./http";
import {API} from "./api";
const deviceInfo = {
  userAgent: navigator.userAgent,
  language: navigator.language,
  platform: navigator.platform,
  online: navigator.onLine,
};

export async function loginUser(email, password) {
  const res = await api.post(API.auth_login, {email , password, deviceInfo});
  return res.data;
}