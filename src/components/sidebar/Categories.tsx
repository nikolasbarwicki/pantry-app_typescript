import React from 'react';
import { useSelector } from 'react-redux';
import CategoriesItem from './CategoriesItem';
import { InventoryItem } from '../../actions/types';

interface RootState {
  inventory: InventoryItem[];
}

const Categories: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory);

  const categoriesList = [
    ...inventory
      .map((el) => el.category)
      .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
      .entries(),
  ];

  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categoriesList.map((el) => (
          <CategoriesItem category={el[0]} amount={el[1]} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
