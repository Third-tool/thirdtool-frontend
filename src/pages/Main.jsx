import styled from 'styled-components';
import mainLogo from '../assets/images/MainLogo 1.svg';
import Header from '../components/Header';
import MenuBar from '../components/main/MenuBar';
import SelectProject from '../components/main/SelectProject';
import CalendarView from './../components/main/CalendarView';

function Main() {
  return (
    <>
      <Header title='The Third Tool' />
      <Margin>
        <MenuBar />
        <Div>
          <Wrapper>
            <SelectProject />
          </Wrapper>
          <CalendarView />
        </Div>
      </Margin>
    </>
  );
}

export default Main;

const Margin = styled.div``;

const Div = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-left: 80px;
`;

const Wrapper = styled.div`
  display: flex;
`;
