export interface InventoryItem {
  id: string;
  category: 'bakery' | 'fruit' | 'dairy' | 'meat' | 'home' | 'pantry';
  name: string;
  qty: number;
  min: number;
}

export type InventoryState = Array<InventoryItem>;
