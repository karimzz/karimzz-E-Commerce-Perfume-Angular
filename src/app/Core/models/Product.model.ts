export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  madeBy?: string;
  category: string;
  brand: string;
  quantity: number;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  rating: number;
}