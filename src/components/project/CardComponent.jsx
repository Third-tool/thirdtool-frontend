import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const CardComponent = ({ data, deckName }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('3 Day');
  const navigate = useNavigate();
  const location = useLocation();

  const periods = ['3 Day', '1 Week', '2 Week', '1 Month'];
  const periodToQuery = {
    '3 Day': '3day',
    '1 Week': '1week',
    '2 Week': '2week',
    '1 Month': '1month',
  };

  // const handlePeriodClick = async (period) => {
  //   setSelectedPeriod(period);
  //   const due = periodToQuery[period];

  //   try {
  //     const response = await axios.get(`/decks/1/cards/due?period=${due}`);
  //     const cards = response.data;
  //     navigate('/review', { state: { cards, selectedPeriod: period } });
  //   } catch (error) {
  //     console.error('데이터 불러오기 실패:', error);
  //   }
  // };
  const handlePeriodClick = (period) => {
    navigate('/qna', {
      state: { cards: data, selectedPeriod: period, source: location.pathname },
    });
  };

  return (
    <Wrapper>
      <DeckTitle>{deckName}</DeckTitle>
      <PeriodTag>
        {periods.map((period, index) => (
          <Period
            key={period}
            isFirst={index === 0}
            isLast={index === periods.length - 1}
            onClick={() => handlePeriodClick(period)}
          >
            {period}
          </Period>
        ))}
      </PeriodTag>
      <Gap>
        <AnimatePresence>
          {data.map((card) => (
            <CardList
              key={card.cardId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                navigate('/qna', {
                  state: {
                    cards: [card],
                    selectedPeriod: selectedPeriod,
                    source: location.pathname,
                  },
                })
              }
            >
              <CardTitle>{card.question}</CardTitle>
              <CardDesc>{card.answer}</CardDesc>
            </CardList>
          ))}
        </AnimatePresence>
      </Gap>
    </Wrapper>
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
  background-color: #1e1e1e;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-right: ${({ isLast }) => (isLast ? 'none' : '1px solid #333')};
  border-top-left-radius: ${({ isFirst }) => (isFirst ? '20px' : '0')};
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? '20px' : '0')};
  border-top-right-radius: ${({ isLast }) => (isLast ? '20px' : '0')};
  border-bottom-right-radius: ${({ isLast }) => (isLast ? '20px' : '0')};
  &:active {
    background-color: red;
  }
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const CardList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 35px;
  width: 712px;
  min-height: 129px;
  background-color: #1e1e1e;
  border-radius: 25px;
  gap: 12px;
  cursor: pointer;
`;

const CardTitle = styled.div`
  font-size: 32px;
`;

const CardDesc = styled.div`
  font-size: 24px;
  color: #777;
`;
