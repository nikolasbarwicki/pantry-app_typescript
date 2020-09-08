/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/context';

const Label = styled.label`
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transition: 0.3s;
`;

const Ball = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  height: 20px;
  width: 20px;
  transform: translateX(0px);
  transition: transform 0.2s ease-out;
`;

const Checkbox = styled.input`
  opacity: 0;

  :checked + label div {
    transform: translateX(24px);
  }

  :checked + label {
    background-color: #3ad3bf;
  }
`;

const ToggleMode: React.FC = () => {
  const { dispatch } = useContext(ThemeContext);

  const onChangeHandler = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <div className="wrapper">
      <Checkbox type="checkbox" id="checkbox" onChange={onChangeHandler} />

      <Label htmlFor="checkbox">
        <Ball />
      </Label>
    </div>
  );
};

export default ToggleMode;
