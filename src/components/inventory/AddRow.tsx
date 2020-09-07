import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import addIcon from '../../assets/add_icon.svg';

const FormWrapper = styled.form`
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 80%;
`;

type FormData = {
  category: string;
  name: string;
  qty: number;
  min: number;
};

const ErrorMessage = styled.small`
  position: absolute;
  top: 25px;
  color: ${(props) => props.theme.red};
  font-weight: 500;
`;

const Select = styled.select`
  border: none;
  background-color: ${(props) => props.theme.paleblue};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  width: 80%;
  :focus {
    outline: none;
  }
  justify-self: start;
  margin-left: 2rem;
  color: ${(props) => props.theme.gray};
`;

const Input = styled.input`
  font-size: 1.6rem;
  font-family: 'Montserrat';
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.paleblue};
  border: none;
  justify-self: start;
  :focus {
    outline: none;
    background-color: ${(props) => props.theme.paleblue};
  }
  ::placeholder {
    color: ${(props) => props.theme.text};
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  outline: none;
  background-image: url(${addIcon});
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: none;
  background-size: cover;
`;

const TableRow: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm<FormData>();

  const id: string = uuidv4();

  const onSubmit = handleSubmit((data: FormData) => {
    dispatch({ type: 'ADD_ITEM', payload: { id, ...data } });
    reset();
  });

  return (
    <FormWrapper onSubmit={onSubmit}>
      <span />
      <Select name="category" ref={register}>
        <option value="bakery">bakery</option>
        <option value="fruit">fruit</option>
        <option value="dairy">dairy</option>
        <option value="meat">meat</option>
        <option value="home">home</option>
        <option value="pantry">pantry</option>
      </Select>
      <InputWrapper>
        <Input
          name="name"
          ref={register({ required: true, maxLength: 25 })}
          placeholder="Add new item..."
          autoComplete="off"
        />
        {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
      </InputWrapper>
      <InputWrapper style={{ maxWidth: '4rem', marginLeft: '2.2rem' }}>
        <Input
          name="qty"
          defaultValue="0"
          autoComplete="off"
          type="number"
          ref={register({ required: true, min: 0, max: 99 })}
        />
        {errors.qty && (
          <ErrorMessage>Quantity can&apos;t be smaller than 0</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper style={{ maxWidth: '4rem', marginLeft: '2.2rem' }}>
        <Input
          name="min"
          defaultValue="0"
          autoComplete="off"
          type="number"
          ref={register({ required: true, min: 0, max: 99 })}
        />
        {errors.min && (
          <ErrorMessage>
            Min. quantity can&apos;t be smaller than 0
          </ErrorMessage>
        )}
      </InputWrapper>

      <span />
      <SubmitButton type="submit" />
    </FormWrapper>
  );
};

export default TableRow;
