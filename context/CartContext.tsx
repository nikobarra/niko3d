'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/types';

// Definición de tipos
export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
};

type Action =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string } }
  | { type: 'CLEAR_CART' };

// Estado inicial
const initialState: CartState = {
  items: [],
  total: 0,
};

// Función para calcular el total del carrito
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
};

// Reducer del carrito
function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      
      // Buscar si el producto ya existe en el carrito
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      let newItems: CartItem[];

      if (existingItemIndex !== -1) {
        // Si existe, actualizar la cantidad
        newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
      } else {
        // Si no existe, agregarlo
        newItems = [...state.items, { product, quantity }];
      }

      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        // Si la cantidad es 0 o menor, eliminar el producto
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId } });
      }

      const newItems = state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }

    case 'REMOVE_FROM_CART': {
      const { productId } = action.payload;
      const newItems = state.items.filter((item) => item.product.id !== productId);

      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }

    case 'CLEAR_CART': {
      return {
        items: [],
        total: 0,
      };
    }

    default:
      return state;
  }
}

// Tipo del contexto
interface CartContextType {
  state: CartState;
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
  getTotalItems: () => number;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Proveedor del contexto
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Función para agregar al carrito
  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) return;
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  // Función para actualizar cantidad
  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  // Función para eliminar del carrito
  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Función para obtener la cantidad de un producto específico
  const getItemQuantity = (productId: string): number => {
    const item = state.items.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  // Función para obtener el total de items en el carrito
  const getTotalItems = (): number => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    state,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getItemQuantity,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
