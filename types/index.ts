export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  size: string;
  pack_quantity: number;
  imageUrl: string;
}

// Los tipos CartItem, CartState y CartAction ahora están definidos en CartContext.tsx
// para evitar importaciones circulares y mantener la coherencia del código
