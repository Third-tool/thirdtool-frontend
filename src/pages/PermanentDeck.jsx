import styled from 'styled-components';
import Header from '@components/Header';
import { DeckComponent } from '@components/project/DeckComponent';
import { Plus } from '@assets/icons/Plus';

function PermanentDeck() {
  return (
    <>
      <Header title='Permanent Project' />
      <Container>
        <Wrapper>
          <DeckComponent data={''} projectType='permanent' />
          <DeckComponent data={''} projectType='permanent' />
        </Wrapper>
        <AddButtonWrapper>
          <AddDeckButton>
            <Plus />덱 추가
          </AddDeckButton>
        </AddButtonWrapper>
      </Container>
    </>
  );
}

export default PermanentDeck;

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
