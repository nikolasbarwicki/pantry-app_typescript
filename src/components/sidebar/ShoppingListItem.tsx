import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Icon from '../Icon';

import { Category } from '../../types/index';

interface Props {
  category: Category;
  name: string;
  amount: number;
}

const Wrapper = styled.div`
  display: grid;
  height: 3.5rem;
  margin: 2rem 0;
  width: 100%;
  grid-template-columns: 5rem auto 3rem 3.5rem;
  align-items: center;
`;

const ShoppingListItem: React.FC<Props> = ({ category, name, amount }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Icon type={category} />
      <h4>{name}</h4>
      <span>{amount}</span>
      <button
        type="button"
        onClick={() => dispatch({ type: 'ADD_PURCHASE', payload: name })}
      >
        +
      </button>
    </Wrapper>
  );
};

export default ShoppingListItem;
