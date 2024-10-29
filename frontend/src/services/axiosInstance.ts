// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://financialmodelingprep.com/api/v3',
  baseURL:  process.env.REACT_APP_LOCAL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API call failed:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
