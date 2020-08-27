import React from 'react';
import styled from 'styled-components';

import TableHeading from './TableHeading';
import TableBody from './TableBody';

const Wrapper = styled.main`
  padding: 5rem 10rem;
  width: 100%;
`;

const Content: React.FC = () => {
  return (
    <Wrapper>
      <h2>Inventory</h2>
      <TableHeading />
      <TableBody />
    </Wrapper>
  );
};

export default Content;
