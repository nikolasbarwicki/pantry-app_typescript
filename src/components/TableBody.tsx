import React from 'react';
import TableRow from './TableRow';
import AddRow from './AddRow';

const TableBody: React.FC = () => {
  return (
    <div>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <AddRow />
    </div>
  );
};

export default TableBody;
