import styled from 'styled-components';
import mainLogo from '../assets/images/MainLogo 2.svg';

function Header({ title }) {
  return (
    <Wrapper>
      <LogoImg src={mainLogo} />
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
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 400;
`;
