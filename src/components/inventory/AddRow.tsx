import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

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
`;

type FormData = {
  category: string;
  name: string;
  qty: number;
  min: number;
};

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
      <select name="category" ref={register}>
        <option value="bakery">bakery</option>
        <option value="fruit">fruit</option>
        <option value="dairy">dairy</option>
        <option value="meat">meat</option>
        <option value="home">home</option>
        <option value="pantry">pantry</option>
      </select>
      <InputWrapper>
        <input
          name="name"
          ref={register({ required: true, maxLength: 25 })}
          placeholder="Add new item..."
          autoComplete="off"
        />
        {errors.name && <small>Name is required</small>}
      </InputWrapper>
      <InputWrapper>
        <input
          name="qty"
          type="number"
          ref={register({ required: true, min: 0, max: 99 })}
        />
        {errors.qty && <small>Quantity can&apos;t be smaller than 0</small>}
      </InputWrapper>
      <InputWrapper>
        <input
          name="min"
          type="number"
          ref={register({ required: true, min: 0, max: 99 })}
        />
        {errors.min && (
          <small>Min. quantity can&apos;t be smaller than 0</small>
        )}
      </InputWrapper>

      <span />
      <input type="submit" />
    </FormWrapper>
  );
};

export default TableRow;
