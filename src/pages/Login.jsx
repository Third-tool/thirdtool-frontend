import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { useEffect, useState } from 'react';
import mainLogo from '@assets/images/MainLogo 2.svg';
import { doLogin } from '@apis/login';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;

  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code&state=test`;

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  useEffect(() => {
    console.log('Component mounted. Kakao Client ID:', KAKAO_CLIENT_ID);
    console.log('Kakao Redirect URI:', KAKAO_REDIRECT_URI);
  }, []);

  useEffect(() => {
    console.log('Component mounted. Naver Client ID:', NAVER_CLIENT_ID);
    console.log('Naver Redirect URI:', NAVER_REDIRECT_URI);
  }, []);

  const { id, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id || !password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    try {
      const userData = await doLogin({ username: id, password });
      console.log('로그인 성공!', userData);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = kakaoAuthUrl;
  };

  const handleNaverLogin = () => {
    window.location.href = naverAuthUrl;
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
      <LogoWrapper>
        <LogoImage src={mainLogo} alt='Logo' />
        <TTT>The Third Tool</TTT>
      </LogoWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='loginId'>아이디</Label>
          <Input
            id='loginId'
            name='id'
            type='text'
            value={id}
            required
            onChange={handleChange}
            placeholder='ID'
          />
          <Label htmlFor='loginPassword'>비밀번호</Label>
          <Input
            id='loginPassword'
            name='password'
            type='password'
            value={password}
            required
            onChange={handleChange}
            placeholder='Password'
          />
          <Button type='submit'>로그인</Button>
          <SocialButtonWrapper>
            <KakaoButton type='button' onClick={handleKakaoLogin}>
              <RiKakaoTalkFill size='26' />
              카카오로 로그인하기
            </KakaoButton>
            <NaverButton type='button' onClick={handleNaverLogin}>
              <SiNaver size='20' />
              네이버로 로그인하기
            </NaverButton>
          </SocialButtonWrapper>
          <SignUpButton type='button' onClick={handleSignUp}>
            회원가입
          </SignUpButton>
        </Form>
      </FormWrapper>
    </>
  );
}

export default Login;

const LogoWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
`;

const TTT = styled.h1`
  margin-left: 20px;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 16px;
  color: #212529;
  border-radius: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px;
  background-color: #888888;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #666;
  }
`;

const SocialButton = styled.button`
  margin-top: 15px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;

const SocialButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const KakaoButton = styled(SocialButton)`
  background-color: #fee500;
  color: #191919;
  height: 46px;
`;

const NaverButton = styled(SocialButton)`
  background-color: #03c75a;
  color: white;
  height: 46px;
`;

const SignUpButton = styled.button`
  margin-top: 30px;
  background: none;
  border: none;
  color: #888888;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  align-self: center;

  &:hover {
    color: #666;
  }
`;
