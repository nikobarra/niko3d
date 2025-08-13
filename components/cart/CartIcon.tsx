'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartIconProps {
  onClick: () => void;
}

export function CartIcon({ onClick }: CartIconProps) {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <button
      onClick={onClick}
      className="relative p-2 text-text-primary hover:text-accent-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 rounded-lg hover:bg-surface-accent/20"
      aria-label="Ver carrito de compras"
    >
      <ShoppingCart className="w-6 h-6" />

      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent-500 text-background text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in shadow-neon">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
}
