import {
  ADD_PURCHASE,
  ADD_QUANTITY,
  DELETE_ITEM,
  REMOVE_QUANTITY,
} from '../actions/types';

interface InventoryItem {
  id: string;
  category: 'bakery' | 'fruit' | 'dairy' | 'meat' | 'home' | 'pantry';
  name: string;
  qty: number;
  min: number;
}

type InventoryState = Array<InventoryItem>;

type Action = { type: string; payload: string };

const initialState: InventoryState = [
  { id: 'bread', category: 'bakery', name: 'bread', qty: 2, min: 1 },
  {
    id: 'brioche buns',
    category: 'bakery',
    name: 'brioche buns',
    qty: 1,
    min: 4,
  },
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

export default (state = initialState, action: Action): InventoryState => {
  switch (action.type) {
    case ADD_QUANTITY:
      return [
        ...state.map((el) =>
          el.name === action.payload ? { ...el, qty: el.qty + 1 } : el,
        ),
      ];
    case REMOVE_QUANTITY:
      return [
        ...state.map((el) =>
          el.name === action.payload ? { ...el, qty: el.qty - 1 } : el,
        ),
      ];
    case ADD_PURCHASE:
      return [
        ...state.map((el) =>
          el.name === action.payload ? { ...el, qty: el.min } : el,
        ),
      ];
    case DELETE_ITEM:
      return [...state.filter((el) => el.name !== action.payload)];
    default:
      return state;
  }
};
