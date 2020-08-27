import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 5rem;

  height: 2rem;
  width: 100%;

  display: grid;
  grid-template-columns:
    8rem minmax(12rem, auto) minmax(12rem, auto) repeat(3, minmax(8rem, 16rem))
    minmax(6rem, 15rem);
  justify-items: center;
  align-items: center;
  text-transform: uppercase;
`;

const TableHeading: React.FC = () => {
  return (
    <Wrapper>
      <span />
      <span style={{ justifySelf: 'start', marginLeft: '2rem' }}>Category</span>
      <span style={{ justifySelf: 'start', marginLeft: '2rem' }}>Item</span>
      <span>Quantity</span>
      <span>Min. qty.</span>
      <span>Difference</span>
      <span>Edit</span>
    </Wrapper>
  );
};

export default TableHeading;
