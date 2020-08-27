import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

interface Categories {
  dairy: string;
  fruit: string;
  home: string;
  meat: string;
  pantry: string;
  bread: string;
}

interface Props {
  category: keyof Categories;
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
  color: white;
  text-align: center;
`;

const CategoriesItem: React.FC<Props> = ({ category }) => {
  return (
    <Wrapper>
      <Icon type={category} />
      <span>{category}</span>
      <span />
      <Value>3</Value>
    </Wrapper>
  );
};

export default CategoriesItem;
