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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
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
        <div className="absolute top-2 right-2 bg-accent-500 text-background text-xs px-2 py-1 rounded-full font-semibold">
          {product.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-accent-500">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center text-text-muted text-sm">
            <Package className="w-4 h-4 mr-1" />
            <span>Pack x{product.pack_quantity}</span>
          </div>
        </div>
        
        <div className="text-text-muted text-xs mb-4">
          <span>Tamaño: {product.size}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <label
            htmlFor={`quantity-${product.id}`}
            className="text-text-secondary text-sm"
          >
            Cantidad:
          </label>
          <input
            id={`quantity-${product.id}`}
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-16 px-2 py-1 bg-surface-primary border border-surface-accent/30 rounded text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
          />
        </div>
        
        <Button
          onClick={handleAddToCart}
          className="w-full group-hover:shadow-neon transition-all duration-300"
          size="md"
          variant="neon"
        >
          <Plus className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
}
