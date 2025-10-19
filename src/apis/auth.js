import axiosInstance from './axios';

export const login = async (code) => {
  const res = await axiosInstance.post('/social/login/kakao', { code });
  return res.data;
};

export default login;
