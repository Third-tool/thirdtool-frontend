import styled from 'styled-components';
import leftArrow from '@assets/images/left_arrow.svg';
import galleryLogo from '@assets/images/gallery.svg';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCard() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageButtonClick = () => {
    fileInputRef.current.click();
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setPreviewImage(previewURL);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Uploaded Image URL:', data.url);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <>
      <Header>
        <LeftArrow src={leftArrow} onClick={goBack} />
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
        <ImageWrapper>
          <ImageButton onClick={handleImageButtonClick}>
            <GalleryLogo src={galleryLogo} />
            이미지 첨부
          </ImageButton>
          <PreviewBox>
            {previewImage ? (
              <PreviewImage src={previewImage} alt='미리보기' />
            ) : (
              <PlaceholderText>✚</PlaceholderText>
            )}
          </PreviewBox>
        </ImageWrapper>
        <HiddenFileInput
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
        />
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
  top: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
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
  height: 40vh;
  resize: none;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  margin-top: 16px;
  padding-left: 3.8vw;
  padding-right: 5vw;
  box-sizing: border-box;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ImageButton = styled.button`
  border: 1px solid #333333;
  background-color: #1e1e1e;
  border-radius: 12px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  padding: 8px 80px;
  align-items: center;
  display: flex;
  width: 300px;
  height: 48px;
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
  width: 160px;
  height: 48px;
  background-color: #cb0404;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  align-self: flex-end;
  margin-left: auto;
`;

const PreviewWrapper = styled.div`
  display: flex;
`;

const PreviewBox = styled.div`
  width: 300px;
  height: 180px;
  border: 2px dashed #777;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  overflow: hidden;
`;

const PlaceholderText = styled.div`
  color: #aaa;
  font-size: 14px;
  text-align: center;
  padding: 0 12px;
`;

const PreviewImage = styled.img`
  width: 300px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  object-fit: cover;
`;
