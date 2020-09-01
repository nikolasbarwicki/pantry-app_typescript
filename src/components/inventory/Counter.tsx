import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  amount: number;
  id: string;
}

const Counter: React.FC<Props> = ({ amount, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: 'REMOVE_QUANTITY', payload: id })}
      >
        -
      </button>
      <span>{amount}</span>
      <button
        type="button"
        onClick={() => dispatch({ type: 'ADD_QUANTITY', payload: id })}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
