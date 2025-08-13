'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/Button';
import { Filter, X } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    return ['Todos', ...uniqueCategories.sort()];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="space-y-6">
      {/* Filtros de categoría */}
      <div className="bg-surface-card rounded-lg p-4 border border-surface-accent/20">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-text-accent" />
          <h2 className="text-lg font-display font-semibold text-text-primary">
            Filtrar por Categoría
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? 'neon' : 'outline'}
              size="sm"
              className="font-body font-medium"
            >
              {category}
            </Button>
          ))}
          
          {activeCategory !== 'Todos' && (
            <Button
              onClick={() => setActiveCategory('Todos')}
              variant="outline"
              size="sm"
              className="font-body font-medium"
            >
              <X className="w-4 h-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-display font-semibold text-text-primary">
            {activeCategory === 'Todos' ? 'Todos los Productos' : `Productos de ${activeCategory}`}
          </h3>
          <span className="text-sm font-body text-text-muted">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Grid de productos */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-surface-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-text-muted" />
          </div>
          <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
            No se encontraron productos
          </h3>
          <p className="text-text-muted font-body">
            No hay productos disponibles en la categoría &quot;{activeCategory}&quot;.
          </p>
          <Button
            onClick={() => setActiveCategory('Todos')}
            variant="outline"
            className="mt-4 font-body"
          >
            Ver todos los productos
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
