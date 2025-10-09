import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { useState } from 'react';
import mainLogo from '@assets/images/MainLogo 2.svg';

function Login() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const { id, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID:', id);
    console.log('Password:', password);
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
            name='id' // name 속성 추가
            type='text'
            value={id}
            required
            onChange={handleChange}
            placeholder='ID'
          />
          <Label htmlFor='loginPassword'>비밀번호</Label>
          <Input
            id='loginPassword'
            name='password' // name 속성 추가
            type='password'
            value={password}
            required
            onChange={handleChange}
            placeholder='Password'
          />
          <Button type='submit'>로그인</Button>
          <SocialButtonWrapper>
            <KakaoButton>
              <RiKakaoTalkFill size='26' />
              카카오로 로그인하기
            </KakaoButton>
            <NaverButton>
              <SiNaver size='20' />
              네이버로 로그인하기
            </NaverButton>
          </SocialButtonWrapper>
          <SignUpButton type='button'>회원가입</SignUpButton>
        </Form>
      </FormWrapper>
    </>
  );
}

export default Login;

const LogoWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;
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
