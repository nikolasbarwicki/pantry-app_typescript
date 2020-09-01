import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';

import { InventoryItem } from '../../actions/types';

interface RootState {
  inventory: InventoryItem[];
}

const ShoppingList: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory);

  const shoppingList = inventory.filter((el) => el.qty - el.min < 0);

  return (
    <div>
      <h2>Shopping list</h2>
      <div>
        {shoppingList.map((el) => (
          <ShoppingListItem
            category={el.category}
            name={el.name}
            amount={-(el.qty - el.min)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
