import axios from 'axios';

const API_BASE_URL = 'https://api.ispecocloud.com';

export const sendVerificationCode = async (email) => {
  return axios.post(`${API_BASE_URL}/api/auth/send-email-otp`, { email });
};

/* export const verifyCode = async (email, code) => {
  return axios.post(`${API_BASE_URL}verify-code`, { email, code });
}; */

export const createAccount = async (email, otp, password, cpassword) => {
  return axios.post(`${API_BASE_URL}/api/auth/signup`, { email, otp, password, cpassword });
};

export const login = async (email, password) => {
  return axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
};
