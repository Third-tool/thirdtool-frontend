import styled from 'styled-components';
import mainLogo from '../assets/images/MainLogo 1.svg';
import Header from '../components/Header';
import MenuBar from '../components/main/MenuBar';
import SelectProject from '../components/main/SelectProject';
import CalendarView from './../components/main/CalendarView';

function Main() {
  return (
    <>
      <Header />
      <Margin>
        <Div>
          <MenuBar />
          <Wrapper>
            <SelectProject />
          </Wrapper>
        </Div>
        <CalendarView />
      </Margin>
    </>
  );
}

export default Main;

const Margin = styled.div`
  margin-left: 50px;
  display: flex;
`;

const Div = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
