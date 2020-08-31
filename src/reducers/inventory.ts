import { InventoryState } from '../actions/types';

const initialState: InventoryState = [
  { id: 'bread', category: 'bakery', name: 'bread', qty: 2, min: 1 },
  { id: 'bananas', category: 'fruit', name: 'bananas', qty: 4, min: 2 },
  {
    id: 'toilet paper',
    category: 'home',
    name: 'toilet paper',
    qty: 3,
    min: 4,
  },
  { id: 'milk', category: 'dairy', name: 'milk', qty: 8, min: 2 },
];

type Action = { type: string; payload: string };

export default (state = initialState, action: Action): InventoryState => {
  switch (action.type) {
    default:
      return state;
  }
};
