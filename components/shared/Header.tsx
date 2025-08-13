'use client';

import React, { useState } from 'react';
import { CartIcon } from '@/components/cart/CartIcon';
import { CartModal } from '@/components/cart/CartModal';
import { Package } from 'lucide-react';

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-surface-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center shadow-neon">
                <Package className="w-6 h-6 text-background" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">
                  3D Print Store
                </h1>
                <p className="text-xs text-text-secondary">
                  Impresiones 3D Personalizadas
                </p>
              </div>
            </div>

            {/* Carrito */}
            <CartIcon onClick={openCart} />
          </div>
        </div>
      </header>

      {/* Modal del carrito */}
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
