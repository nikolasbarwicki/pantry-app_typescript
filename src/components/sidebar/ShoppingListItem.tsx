import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Icon from '../Icon';
import TickIcon from '../../assets/tick_icon.svg';

import { Category } from '../../types/index';

const Wrapper = styled.div`
  display: grid;
  height: 3.5rem;
  margin: 2rem 0;
  width: 100%;
  grid-template-columns: 5rem auto 3rem 3.5rem;
  align-items: center;
`;

const TickButton = styled.button`
  cursor: pointer;
  outline: none;
  background-image: url(${TickIcon});
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: none;
  background-size: cover;
`;

interface Props {
  category: Category;
  name: string;
  amount: number;
}

const ShoppingListItem: React.FC<Props> = ({ category, name, amount }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Icon type={category} />
      <h4>{name}</h4>
      <span>{amount}</span>
      <TickButton
        type="button"
        onClick={() => dispatch({ type: 'ADD_PURCHASE', payload: name })}
      />
    </Wrapper>
  );
};

export default ShoppingListItem;
