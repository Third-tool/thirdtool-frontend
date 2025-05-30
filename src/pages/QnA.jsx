import styled from 'styled-components';
import mainLogo from '@assets/images/MainLogo 1.svg';
import leftArrow from '@assets/images/left_arrow.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

function QnA() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cards, selectedPeriod, source } = location.state || {};
  const [shownCards, setShownCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [isAnswerHidden, setIsAnswerHidden] = useState(true); //true면 answer 가려짐

  const headerTitle = () => {
    if (source?.includes('3day')) return '3 Day Project';
    if (source?.includes('permanent')) return 'Permanent Project';
    return '카드 학습';
  };

  const showNextCard = useCallback(
    (shownCards) => {
      const remainCards = cards.filter(
        //남은 카드 filter
        (card) => !shownCards.includes(card.cardId)
      );
      if (remainCards.length === 0) {
        //남은 카드가 없으면 (=다 봤으면)
        alert('카드를 다 봤어요!');
        navigate(-1);
        return;
      }
      const randomIndex = Math.floor(Math.random() * remainCards.length); //랜덤으로 카드번호 설정
      const nextCard = remainCards[randomIndex];
      setCurrentCard(nextCard);
      setShownCards([...shownCards, nextCard.cardId]); //다음 카드로
      setIsAnswerHidden(true); // overlay 다시 켜고 버튼 활성화
      setIsButton(false);
    },
    [cards, navigate]
  );

  useEffect(() => {
    if (cards && cards.length > 0) {
      showNextCard([]);
    }
  }, [cards, showNextCard]);

  const handleAnswer = () => {
    setIsAnswerHidden(false); // answer 가림막 해제
    setIsButton(true); // 버튼 비활성화 처리
    setTimeout(() => {
      showNextCard(shownCards); // 2.5초 후 다음 카드 보여주기
    }, 2500);
  };

  //만약 데이터가 안넘어왔다면
  if (!cards || cards.length === 0 || !currentCard) {
    return (
      <div>
        데이터가 없습니다. <button onClick={() => navigate(-1)}>뒤로</button>
      </div>
    );
  }

  return (
    <Container>
      <Header>
        <LeftArrow src={leftArrow} onClick={() => navigate(-1)} />
        <LogoImg src={mainLogo} />
        <Title>{headerTitle()}</Title>
      </Header>
      <Divider />
      <Content>
        <Label>Question❓</Label>
        <DataInput>{currentCard.question}</DataInput>
        <Label>Answer ✋</Label>
        <DataInput>
          {isAnswerHidden ? (
            <Overlay>정답을 확인하려면 버튼을 눌러주세요</Overlay>
          ) : (
            currentCard.answer
          )}
        </DataInput>
      </Content>
      <Divider />
      <ButtonWrapper>
        <AgainButton disabled={isButton} onClick={handleAnswer}>
          Again
        </AgainButton>
        <HardButton disabled={isButton} onClick={handleAnswer}>
          Hard
        </HardButton>
        <GoodButton disabled={isButton} onClick={handleAnswer}>
          Good
        </GoodButton>
        <EasyButton disabled={isButton} onClick={handleAnswer}>
          Easy
        </EasyButton>
      </ButtonWrapper>
    </Container>
  );
}
export default QnA;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  height: 96px;
  justify-content: center;
  align-items: center;
`;

const LeftArrow = styled.img`
  position: absolute;
  left: 30px;
  top: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 56px;
  margin-right: 27px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333333;
`;

const Content = styled.div`
  height: 646px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 36px;
  font-weight: 400;
`;

const DataInput = styled.div`
  width: 800px;
  height: 220px;
  background-color: #444444;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
`;

const Button = styled.button`
  background-color: #1e1e1e;
  border: 1px solid #333333;
  font-size: 24px;
  cursor: pointer;
  width: 200px;
  height: 53px;
`;

const AgainButton = styled(Button)`
  border-radius: 20px 0px 0px 20px;
  color: white;
`;

const HardButton = styled(Button)`
  color: #cb0404;
`;

const GoodButton = styled(Button)`
  color: #ffd93d;
`;

const EasyButton = styled(Button)`
  border-radius: 0px 20px 20px 0px;
  color: #6bcb77;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #444444;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 20px;
`;
