import styled from 'styled-components';
import mainLogo from '../assets/images/MainLogo 1.svg';

function Main() {
  return (
    <>
      <Wrapper>
        <LogoImg src={mainLogo} />
        <Title>The Third Tool</Title>
      </Wrapper>
      <SelectProject>3day project</SelectProject>
      <SelectProject>영구 project</SelectProject>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const LogoImg = styled.img`
  width: 40px;
  margin-right: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const SelectProject = styled.div`
  width: 700px;
  height: 100px;
  margin: 80px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6e6e6ecc;
  font-size: 20px;
`;
