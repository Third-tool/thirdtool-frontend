import axiosInstance from './axios';

export const doLogin = async ({ username, password }) => {
  try {
    const res = await axiosInstance.post(
      `/login`,
      { username, password },
      { withCredentials: true }
    );
    console.log('로그인 성공:', res.data);

    if (res.data && res.data.userId) {
      localStorage.setItem('userId', res.data.userId);
    }

    return res.data;
  } catch (error) {
    console.error(
      '로그인 API 호출 실패:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
