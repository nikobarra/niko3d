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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center shadow-neon">
                <Package className="w-6 h-6 text-background" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-text-primary tracking-wide">
                  Niko3D
                </h1>
                <p className="text-xs font-body text-text-secondary tracking-wide">
                  Tus ideas, en tres dimensiones
                </p>
              </div>
            </div>
            <CartIcon onClick={openCart} />
          </div>
        </div>
      </header>
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
