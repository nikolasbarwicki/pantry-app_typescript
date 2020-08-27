import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
  height: 6.5rem;
  width: 100%;

  display: grid;
  grid-template-columns:
    8rem minmax(12rem, auto) minmax(12rem, auto) repeat(3, minmax(8rem, 16rem))
    minmax(6rem, 15rem);
  justify-items: center;
  align-items: center;
  margin: 2rem 0;
`;

const TableRow: React.FC = () => {
  return (
    <Wrapper>
      <Icon />
      <span style={{ justifySelf: 'start', marginLeft: '2rem' }}>Bakery</span>
      <span
        style={{ justifySelf: 'start', marginLeft: '2rem', fontWeight: 600 }}
      >
        Bread
      </span>
      <span>+1</span>
      <span>+1</span>
      <span>+1</span>
      <Icon />
    </Wrapper>
  );
};

export default TableRow;
