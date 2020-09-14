export type Category =
  | 'bakery'
  | 'fruit'
  | 'dairy'
  | 'meat'
  | 'home'
  | 'pantry';

export interface InventoryItem {
  id: string;
  category: Category;
  name: string;
  qty: number;
  min: number;
}

export interface RootState {
  inventory: InventoryItem[];
}

export type FormData = {
  category: string;
  name: string;
  qty: number;
  min: number;
};
