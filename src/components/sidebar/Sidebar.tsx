import React from 'react';
import styled from 'styled-components';

import ShoppingList from './ShoppingList';
import Categories from './Categories';
import logo from '../../assets/pantryapp_logo.svg';

const Wrapper = styled.div`
  background-color: #fff;
  min-width: 40rem;
  box-shadow: 10px 0px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 5rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 10rem);
  justify-content: space-between;
  margin-top: 5rem;
`;

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <img src={logo} alt="Pantry App Logo" />
      <InnerWrapper>
        <ShoppingList />
        <Categories />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Sidebar;
