import styled from 'styled-components';
import leftArrow from '../assets/images/left_arrow.svg';
import galleryLogo from '../assets/images/gallery.svg';

function AddCard() {
  return (
    <>
      <Header>
        <LeftArrow src={leftArrow} />
        <Title>카드 추가</Title>
      </Header>

      <Divider />

      <TagWrapper>
        <TagArea placeholder='#Tag' />
      </TagWrapper>

      <Content>
        <Column>
          <Label>💡 Question</Label>
          <Textarea placeholder='카드에 대한 질문을 입력하세요' />
        </Column>
        <Column>
          <Label>✍️ Answer</Label>
          <Textarea placeholder='카드에 대한 답변을 입력하세요' />
        </Column>
      </Content>

      <Footer>
        <ImageButton>
          <GalleryLogo src={galleryLogo} />
          이미지 첨부
        </ImageButton>
        <SubmitButton>Submit</SubmitButton>
      </Footer>
    </>
  );
}

export default AddCard;

const Header = styled.div`
  position: relative;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0px 8px 0px;
`;

const LeftArrow = styled.img`
  position: absolute;
  left: 40px;
  top: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const GalleryLogo = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px 10px 2px 10px;
  display: inline-block;
  vertical-align: -30%;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333333;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 45%;
  min-width: 300px;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: 600;
`;

const Textarea = styled.textarea`
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #333333;
  border-radius: 15px;
  padding: 20px;
  font-size: 20px;
  height: 60vh;
  resize: none;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 16px;

  padding-left: 3.8vw;
  padding-right: 5vw;
  box-sizing: border-box;
`;

const ImageButton = styled.button`
  border: 1px solid #333333;
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 12px 32px 12px 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  align-items: center;
  display: flex;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 3.8vw;
  margin-bottom: 20px;
`;

const TagArea = styled.textarea`
  width: 120px;
  background-color: #111;
  border: 1px solid #444;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  height: 4vh;
  line-height: 3.5vh;
  resize: none;
  overflow: hidden;
`;

const SubmitButton = styled.button`
  box-sizing: border-box;
  width: 160px;
  height: 48px;
  margin-left: auto;
  margin-right: -18px;
  background-color: #cb0404;
  color: white;
  padding: 12px 0px 24px 0px;
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
