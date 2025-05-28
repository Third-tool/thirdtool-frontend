import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowBtn } from '../../assets/icons/ArrowBtn';

export const DeckComponent = ({ data, projectType }) => {
  const navigate = useNavigate();
  const gotoCard = (type) => {
    navigate(`/${type}/card`);
  };

  const isPermanent = projectType === 'permanent';

  return (
    <DeckBox onClick={() => gotoCard(projectType)}>
      {isPermanent ? (
        <>
          <DeckContainer>
            <DeckTitle>React 이론</DeckTitle>
            <ArrowBtn />
          </DeckContainer>
          <TimeDiv>
            <DeckTime>마지막 학습일: N일 전</DeckTime>
            <DeckTag>1-2일</DeckTag>
          </TimeDiv>
        </>
      ) : (
        <>
          <DeckTitle>React 이론</DeckTitle>
          <TimeDiv>
            <DeckTime>마지막 학습일: N일 전</DeckTime>
            <DeckTag>1-2일</DeckTag>
          </TimeDiv>
        </>
      )}
    </DeckBox>
  );
};

const DeckBox = styled.button`
  all: unset;
  width: 560px;
  height: 140px;
  border-radius: 25px;
  background-color: #1e1e1e;
  display: flex;
  gap: 36px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const DeckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;
`;

const DeckTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding-left: 34px;
  padding-right: 34px;
`;

const TimeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 34px;
  padding-right: 34px;
`;

const DeckTime = styled.div`
  font-size: 16px;
  color: #999;
  font-weight: 600;
`;

const DeckTag = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
`;
