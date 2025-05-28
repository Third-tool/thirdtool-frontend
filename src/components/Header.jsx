import styled from 'styled-components';
import mainLogo from '../assets/images/MainLogo 2.svg';
import { useNavigate } from 'react-router-dom';

function Header({ title }) {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <LogoImg onClick={gotoHome} src={mainLogo} />
      <Title>{title}</Title>
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
