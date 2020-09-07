import React from 'react';
import styled from 'styled-components';

import TableHeading from './TableHeading';
import TableBody from './TableBody';
import ToggleMode from '../ToggleMode';

const Wrapper = styled.main`
  padding: 4rem 10rem;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Inventory</h2>
        <ToggleMode />
      </Header>
      <TableHeading />
      <TableBody />
    </Wrapper>
  );
};

export default Content;
