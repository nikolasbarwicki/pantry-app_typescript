import React from 'react';

import ShoppingListItem from './ShoppingListItem';

const ShoppingList: React.FC = () => {
  return (
    <div>
      <h2>Shopping list</h2>
      <div>
        <ShoppingListItem name="Carrots" category="fruit" amount={1} />
        <ShoppingListItem name="Milk" category="dairy" amount={3} />
        <ShoppingListItem name="Toilet paper" category="home" amount={6} />
      </div>
    </div>
  );
};

export default ShoppingList;
