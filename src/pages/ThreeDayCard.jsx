import styled from 'styled-components';
import Header from '../components/Header';
import { ProjectSideBar } from '../components/project/ProjectSideBar';
import { CardComponent } from '../components/project/CardComponent';
import { Plus } from '../assets/icons/Plus';

function ThreeDayCard() {
  return (
    <>
      <Header title='3 Day Project' />
      <Container>
        <ProjectSideBar />
        <CardComponent />
      </Container>
      <AddButtonWrapper>
        <AddDeckButton>
          <Plus />
          카드 추가
        </AddDeckButton>
      </AddButtonWrapper>
    </>
  );
}

export default ThreeDayCard;

const Container = styled.div`
  display: flex;
  gap: 30px;
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
  width: 177px;
  height: 74px;
  font-size: 24px;
  border: none;
  border-radius: 20px;
  background-color: #cb0404;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;
