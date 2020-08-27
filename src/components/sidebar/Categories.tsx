import React from 'react';

import CategoriesItem from './CategoriesItem';

type Category = 'bread' | 'fruit' | 'dairy' | 'meat' | 'home' | 'pantry';

const categories: Category[] = [
  'bread',
  'fruit',
  'dairy',
  'meat',
  'home',
  'pantry',
];

const Categories: React.FC = () => {
  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categories.map((el) => (
          <CategoriesItem category={el} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
