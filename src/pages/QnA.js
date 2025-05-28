import styled from 'styled-components';
import mainLogo from '@assets/images/MainLogo 1.svg';
import leftArrow from '@assets/images/left_arrow.svg';

function QnA() {
  return (
    <>
      <Header>
        <LeftArrow src={leftArrow} />
        <LogoImg src={mainLogo} />
        <Title>3 Day Project</Title>
      </Header>
      <Divider />
      <Content>
        <Label>Question❓</Label>
        <Textarea placeholder='MockData' />
        <Label>Answer ✋</Label>
        <Textarea placeholder='MockData' />
      </Content>

      <Divider />

      <ButtonWrapper>
        <AgainButton>Again</AgainButton>
        <HardButton>Hard</HardButton>
        <GoodButton>Good</GoodButton>
        <EasyButton>Easy</EasyButton>
      </ButtonWrapper>
    </>
  );
}

export default QnA;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LeftArrow = styled.img`
  position: absolute;
  left: 40px;
  top: 30px;
  width: 40px;
  height: 0px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 40px;
  margin-right: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Divider = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #333333;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0px 10px 0px;
`;

const Textarea = styled.textarea`
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #333333;
  border-radius: 15px;
  padding: 20px;
  font-size: 20px;
  width: 50vw;
  height: 30vh;
  resize: none;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #1e1e1e;
  border: 1px solid #333333;
  font-size: 24px;
  cursor: pointer;
  width: 10vw;
  height: 60px;
`;

const AgainButton = styled(Button)`
  border-radius: 10px 0px 0px 10px;
  color: white;
`;

const HardButton = styled(Button)`
  color: #cb0404;
`;

const GoodButton = styled(Button)`
  color: #ffd93d;
`;

const EasyButton = styled(Button)`
  border-radius: 0px 10px 10px 0px;
  color: #6bcb77;
`;
