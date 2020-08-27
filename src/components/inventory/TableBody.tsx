import React from 'react';
import TableRow from './TableRow';
import AddRow from './AddRow';

type DummyContent = Array<{
  category: 'bread' | 'fruit' | 'dairy' | 'meat' | 'home' | 'pantry';
  name: string;
  qty: number;
  min: number;
}>;

const dummyContent: DummyContent = [
  { category: 'bread', name: 'Bread', qty: 2, min: 1 },
  { category: 'fruit', name: 'Bananas', qty: 5, min: 5 },
  { category: 'fruit', name: 'Carrots', qty: 2, min: 1 },
  { category: 'dairy', name: 'Milk', qty: 0, min: 3 },
  { category: 'home', name: 'Toilet paper', qty: 0, min: 6 },
  { category: 'pantry', name: 'Bread flour', qty: 4, min: 4 },
];

const TableBody: React.FC = () => {
  return (
    <div>
      {dummyContent.map((el) => (
        <TableRow
          category={el.category}
          name={el.name}
          qty={el.qty}
          min={el.min}
        />
      ))}
      <AddRow />
    </div>
  );
};

export default TableBody;
