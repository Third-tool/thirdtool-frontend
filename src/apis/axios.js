import axios from 'axios';
import { useAuthStore } from '../stores/useAuthStore';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken && !config.url.includes('/social/login')) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('401: 토큰 만료 또는 인증 오류');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
