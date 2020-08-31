import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

type Category = 'bakery' | 'fruit' | 'dairy' | 'meat' | 'home' | 'pantry';

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
  return (
    <Wrapper>
      <Icon type={category} />
      <h4>{name}</h4>
      <span>{amount}</span>
      <Icon type="tick" />
    </Wrapper>
  );
};

export default ShoppingListItem;
