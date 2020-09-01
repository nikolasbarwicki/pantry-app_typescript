import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Counter from './Counter';
import Icon from '../Icon';

import { Category } from '../../types/index';

interface Props {
  category: Category;
  name: string;
  qty: number;
  min: number;
}

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

const TableRow: React.FC<Props> = ({ category, name, qty, min }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Icon type={category} />
      <span style={{ justifySelf: 'start', marginLeft: '2rem' }}>
        {category}
      </span>
      <span
        style={{ justifySelf: 'start', marginLeft: '2rem', fontWeight: 600 }}
      >
        {name}
      </span>
      <Counter id={name} amount={qty} />
      <span>{min}</span>
      <span>{qty - min}</span>
      <button
        type="button"
        onClick={() => dispatch({ type: 'DELETE_ITEM', payload: name })}
      >
        X
      </button>
    </Wrapper>
  );
};

export default TableRow;
