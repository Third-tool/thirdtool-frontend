import styled from 'styled-components';
import mainLogo from '../assets/images/MainLogo 1.svg';

function Header() {
  return (
    <Wrapper>
      <LogoImg src={mainLogo} />
      <Title>The Third Tool</Title>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 168px;
  margin-left: 50px;
`;

const LogoImg = styled.img`
  width: 120px;
  margin-right: 30px;
`;

const Title = styled.div`
  font-size: 72px;
  font-weight: 400;
`;
