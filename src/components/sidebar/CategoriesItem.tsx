import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

import { Category } from '../../types/index';

interface Props {
  category: Category;
  amount: number;
}

const Wrapper = styled.div`
  display: grid;
  height: 3.5rem;
  margin: 1rem 0;
  width: 100%;
  grid-template-columns: 5rem auto 4rem 2.5rem;
  align-items: center;
`;

const Value = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 3px;
  background: ${(props) => props.theme.gray};
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-weight: 700;
`;

const CategoriesItem: React.FC<Props> = ({ category, amount }) => {
  return (
    <Wrapper>
      <Icon type={category} />
      <span>{category}</span>
      <span />
      <Value>{amount}</Value>
    </Wrapper>
  );
};

export default CategoriesItem;
