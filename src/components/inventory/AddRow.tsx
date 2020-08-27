import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const Wrapper = styled.div`
  border-radius: 2rem;
  height: 6.5rem;
  width: 100%;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D9D9D9FF' stroke-width='1' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

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
      <span />
      <span style={{ justifySelf: 'start', marginLeft: '2rem' }}>
        Choose category
      </span>
      <span style={{ justifySelf: 'start', marginLeft: '2rem' }}>
        Add new item
      </span>
      <span>+1</span>
      <span>+1</span>
      <span>+1</span>
      <Icon type="add" />
    </Wrapper>
  );
};

export default TableRow;
