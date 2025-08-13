'use client';

import React, { useState } from 'react';
import { CartIcon } from '@/components/cart/CartIcon';
import { CartModal } from '@/components/cart/CartModal';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-surface-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" showText={true} />
            <CartIcon onClick={openCart} />
          </div>
        </div>
      </header>
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
