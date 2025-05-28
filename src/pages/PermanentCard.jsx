import styled from 'styled-components';
import { Plus } from '../assets/icons/Plus';
import { CardComponent } from '../components/project/CardComponent';
import Header from '../components/Header';
import { ProjectSideBar } from '../components/project/ProjectSideBar';
import { permanentMockData } from '../apis/cardMockData';

function PermanentCard() {
  const data = permanentMockData.data;
  return (
    <>
      <Header title='Permanent Project' />
      <Container>
        <ProjectSideBar projectType='permanent' />
        <CardComponent data={data} />
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

export default PermanentCard;

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
