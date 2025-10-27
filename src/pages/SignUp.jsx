import styled from 'styled-components';
import mainlogo from '@assets/images/MainLogo 2.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignUp, checkUsernameExists } from '@apis/signup';

function SignUp() {
  const [idExists, setIdExists] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    nickname: '',
  });

  const { id, password, confirmPassword, email, nickname } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleCheckDuplicate = async () => {
    if (!id) {
      alert('아이디를 입력해주세요.');
      return;
    }
    try {
      const exists = await checkUsernameExists(id);
      if (exists) {
        alert('이미 사용 중인 아이디입니다.');
        setIdExists(true);
      } else {
        setIdExists(false);
        alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      console.error('아이디 중복 확인 실패:', error);
      alert('아이디 중복 확인에 실패했습니다. 다시 시도해주세요.');
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id || !password || !confirmPassword || !email || !nickname) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (idExists) {
      alert('아이디 중복 확인을 해주세요.');
      return;
    }
    try {
      await doSignUp({ username: id, password, nickname, email });
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <LogoWrapper>
        <LogoImage src={mainlogo} alt='Logo' />
        <TTT>The Third Tool</TTT>
      </LogoWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <h2>회원가입</h2>
          <Label htmlFor='signupId'>아이디</Label>
          <InputWrapper>
            <IdInput
              id='signupId'
              name='id'
              type='text'
              value={id}
              required
              onChange={handleChange}
              placeholder='ID'
            />
            <CheckDuplicateButton type='button' onClick={handleCheckDuplicate}>
              중복 확인
            </CheckDuplicateButton>
          </InputWrapper>
          <Label htmlFor='signupPassword'>비밀번호</Label>
          <Input
            id='signupPassword'
            name='password'
            type='password'
            value={password}
            required
            onChange={handleChange}
            placeholder='Password'
          />
          <Label htmlFor='confirmPassword'>비밀번호 확인</Label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            required
            onChange={handleChange}
            placeholder='Confirm Password'
          />
          <Label htmlFor='signupEmail'>이메일</Label>
          <Input
            id='signupEmail'
            name='email'
            type='email'
            value={email}
            required
            onChange={handleChange}
            placeholder='Email'
          />
          <Label htmlFor='signupNickname'>닉네임</Label>
          <Input
            id='signupNickname'
            name='nickname'
            type='text'
            value={nickname}
            required
            onChange={handleChange}
            placeholder='Nickname'
          />
          <SubmitButton type='submit'>회원가입</SubmitButton>
        </Form>
      </FormWrapper>
    </>
  );
}

export default SignUp;

const LogoWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 60px;
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  gap: 10px;
`;

const IdInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  height: 38px;
  box-sizing: border-box;
`;

const CheckDuplicateButton = styled.button`
  padding: 8px 12px;
  background-color: #cbcbcb;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap; /* Prevents button text from wrapping */
  height: 38px; /* Match the height of the input */
  box-sizing: border-box;

  &:hover {
    background-color: #b0b0b0;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 20px;
  background-color: black;
  color: black;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: white;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #cbcbcb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #d1d3d4;
  }
`;
