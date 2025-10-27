import styled from 'styled-components';
import mainLogo from '@assets/images/MainLogo 2.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header({ title }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };
  
  return (
    <Wrapper>
      <LogoImg onClick={gotoHome} src={mainLogo} />
      <Title>{title}</Title>
      {isLoggedIn ? <LoginTitle>로그아웃</LoginTitle> : <LoginTitle onClick={goToLogin}>로그인</LoginTitle>}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 130px;
  margin-left: 50px;
`;

const LogoImg = styled.img`
  width: 75px;
  margin-right: 22px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 400;
`;

const LoginTitle = styled.div`
  margin-left: auto;
  margin-right: 100px;
  font-size: 20px;
  cursor: pointer;
`;