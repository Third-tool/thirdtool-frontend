/*
- [ ]  **페이지 진입 시** → `username`, `password`, `nickname`, `email` 입력 필드 표시.
- [ ]  **아이디 중복 확인 버튼 클릭 시** → `POST /user/exist` 호출, 사용 가능 여부 알림창 표시.
- [ ]  **모든 필드 입력 후 ‘회원가입’ 클릭 시** → `POST /user` 요청 (회원 정보 등록).
- [ ]  **회원가입 성공 시** → “회원가입 성공! 로그인 페이지로 이동합니다.” 알림 후 `/login`으로 이동.
- [ ]  **회원가입 실패 시** → “회원가입 실패” 또는 예외 메시지 화면에 표시.
- [ ]  **이미 계정이 있나요?** → 클릭 시 로그인 페이지로 이동.
- [ ]  **스타일 구성** → 중앙 정렬된 폼, 간단한 입력창 + 중복확인/회원가입 버튼 UI.
*/

import axiosInstance from './axios';

export const checkUsernameExists = async (username) => {
  try {
    const res = await axiosInstance.post('/user/exist', { username });
    console.log('아이디 중복 확인 성공:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      '아이디 중복 확인 API 호출 실패:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const doSignUp = async ({ username, password, nickname, email }) => {
  try {
    const res = await axiosInstance.post(`/user`, {
      username,
      password,
      nickname,
      email,
    });
    console.log('회원가입 성공:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      '회원가입 API 호출 실패:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default doSignUp;
