import styled from 'styled-components';
import Header from '@components/Header';
import { DeckComponent } from '@components/project/DeckComponent';
import { Plus } from '@assets/icons/Plus';
import { useState } from 'react';
import AddDeckModal from '@components/project/AddDeckModal';

function ThreeDayDeck() {
  const [decks, setDecks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDeckTitle, setNewDeckTitle] = useState('');

  const handleAddDeck = () => {
    if (newDeckTitle.trim()) {
      setDecks([...decks, newDeckTitle]);
      setNewDeckTitle('');
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Header title='3day Project' />
      <Container>
        <Wrapper>
          {decks.map((title, index) => (
            <DeckComponent key={index} data={title} projectType='3day' />
          ))}
        </Wrapper>
        <AddButtonWrapper>
          <AddDeckButton onClick={() => setIsModalOpen(true)}>
            <Plus />덱 추가
          </AddDeckButton>
        </AddButtonWrapper>
        {isModalOpen && (
          <AddDeckModal
            value={newDeckTitle}
            onChange={(e) => setNewDeckTitle(e.target.value)}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddDeck}
          />
        )}
      </Container>
    </>
  );
}

export default ThreeDayDeck;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 90px 70px 40px 0;
`;

const AddDeckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 160px;
  height: 60px;
  font-size: 24px;
  border: none;
  border-radius: 20px;
  background-color: #cb0404;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

const AddDeckTitle = styled.div`
  font-size: 20px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #1e1e1e;
  padding: 40px;
  border-radius: 16px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 80px;
  &::placeholder {
    color: #aaa;
    font-size: 18px;
  }
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
