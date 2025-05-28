import styled from 'styled-components';
import { DecksBtn } from '@assets/icons/DecksBtn';
import { HomeBtn } from '@assets/icons/HomeBtn';
import { ReviewBtn } from '@assets/icons/ReviewBtn';
import { useNavigate } from 'react-router-dom';

export const ProjectSideBar = ({ projectType }) => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
  };

  const gotoDeck = (type) => {
    navigate(`/${type}`);
  };
  return (
    <Wrapper>
      <Menu onClick={gotoHome}>
        <HomeBtn />
        Home
      </Menu>
      <Menu onClick={() => gotoDeck(projectType)}>
        <DecksBtn />
        Decks
      </Menu>
      <Menu>
        <ReviewBtn />
        Review
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98px;
  gap: 13px;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
`;
