import React, { useState } from 'react';
import styled from 'styled-components';
import { cardMockData } from '../../apis/cardMockData';
import { DeckPlus } from '../../assets/icons/Plus';

export const CardComponent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3 Day');
  const data = cardMockData;

  const periods = ['3 Day', '1 Week', '2 Week', '1 Month'];

  return (
    <>
      <Wrapper>
        <DeckTitle>비즈니스 영어 덱</DeckTitle>
        <PeriodTag>
          {periods.map((period, index) => (
            <Period
              key={period}
              isSelected={selectedPeriod === period}
              isFirst={index === 0}
              isLast={index === periods.length - 1}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </Period>
          ))}
        </PeriodTag>
        <CardList>
          <CardTitle></CardTitle>
        </CardList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
`;

const DeckTitle = styled.div`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const PeriodTag = styled.div`
  width: 712px;
  height: 55px;
  border-radius: 20px;
  margin-bottom: 39px;
  border: 2px solid #333;
  background: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Period = styled.button`
  all: unset;
  width: 178px;
  height: 100%;
  text-align: center;
  font-size: 24px;
  background-color: ${({ isSelected }) => (isSelected ? '#CB0404' : '#1E1E1E')};
  color: white;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  border-right: ${({ isLast }) => (isLast ? 'none' : '1px solid #333')};

  border-top-left-radius: ${({ isFirst }) => (isFirst ? '20px' : '0')};
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? '20px' : '0')};

  border-top-right-radius: ${({ isLast }) => (isLast ? '20px' : '0')};
  border-bottom-right-radius: ${({ isLast }) => (isLast ? '20px' : '0')};
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 35px;
  width: 712px;
  height: 129px;
  background-color: #1e1e1e;
  border-radius: 25px;
  gap: 40px;
`;

const CardTitle = styled.div`
  font-size: 32px;
`;
