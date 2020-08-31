import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
import AddRow from './AddRow';

import { InventoryItem } from '../../actions/types';

interface RootState {
  inventory: InventoryItem[];
}

const TableBody: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory);

  return (
    <div>
      {inventory.map((el) => (
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
