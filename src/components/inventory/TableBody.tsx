import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
import AddRow from './AddRow';

import { RootState } from '../../types/index';

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
