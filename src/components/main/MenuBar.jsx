import { useState } from 'react';
import styled from 'styled-components';

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <Flex>
      <MenuBtn
        active={activeMenu === 'Home'}
        onClick={() => setActiveMenu('Home')}
      >
        Home
      </MenuBtn>
      <MenuBtn
        active={activeMenu === 'Library'}
        onClick={() => setActiveMenu('Library')}
      >
        Library
      </MenuBtn>
    </Flex>
  );
};

export default MenuBar;

const Flex = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 24px;
`;

const MenuBtn = styled.div`
  height: 88px;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '5px solid red' : 'none')};
  transition: border-bottom 0.2s ease-in-out;
`;
