import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 2rem;
  color: ${(props) => props.theme.gray};
  margin: 0.5rem;
`;

interface Props {
  amount: number;
  id: string;
}

const Counter: React.FC<Props> = ({ amount, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        type="button"
        onClick={() => dispatch({ type: 'REMOVE_QUANTITY', payload: id })}
      >
        -
      </Button>
      <span>{amount}</span>
      <Button
        type="button"
        onClick={() => dispatch({ type: 'ADD_QUANTITY', payload: id })}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
