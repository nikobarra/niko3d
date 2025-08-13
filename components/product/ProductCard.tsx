'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { ProductImage } from '@/components/ui/ProductImage';
import { Plus, Package } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-surface-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-surface-accent/20">
      <div className="relative overflow-hidden">
        <ProductImage
          src={product.imageUrl}
          alt={product.name}
          category={product.category}
          className="w-full h-48"
        />
        <div className="absolute top-2 right-2 bg-accent-500 text-background text-xs px-2 py-1 rounded-full font-body font-semibold">
          {product.category}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-display font-semibold text-text-primary leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-sm font-body text-text-muted line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-display font-bold text-text-accent">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs font-body text-text-muted">
              Pack x{product.pack_quantity} • {product.size}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center border border-surface-accent/30 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-1 text-text-muted hover:text-text-primary transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-2 py-1 text-sm font-body font-medium text-text-primary min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1 text-text-muted hover:text-text-primary transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          variant="secondary"
          className="w-full font-body font-semibold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
}
