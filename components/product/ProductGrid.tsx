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
  // Estado local para la categoría activa
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  // Extraer categorías únicas usando Set
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );
    return ['Todos', ...uniqueCategories.sort()];
  }, [products]);

  // Filtrar productos basado en la categoría activa
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [products, activeCategory]);

  // Función para cambiar la categoría activa
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Función para limpiar el filtro
  const clearFilter = () => {
    setActiveCategory('Todos');
  };

  return (
    <div className="space-y-6">
      {/* Filtros de categoría */}
      <div className="bg-surface-card rounded-lg p-4 border border-surface-accent/20">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-accent-500" />
          <h3 className="text-lg font-semibold text-text-primary">
            Filtrar por Categoría
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={activeCategory === category ? 'neon' : 'outline'}
              size="sm"
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Indicador de filtro activo */}
        {activeCategory !== 'Todos' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-text-secondary">
              Mostrando productos de:{' '}
              <span className="text-accent-500 font-medium">
                {activeCategory}
              </span>
            </span>
            <Button
              onClick={clearFilter}
              variant="outline"
              size="sm"
              className="ml-2 hover:bg-accent-500 hover:text-background"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Información de resultados */}
      <div className="text-center">
        <p className="text-text-secondary">
          Mostrando{' '}
          <span className="text-accent-500 font-semibold">
            {filteredProducts.length}
          </span>{' '}
          de{' '}
          <span className="text-text-primary font-semibold">
            {products.length}
          </span>{' '}
          productos
          {activeCategory !== 'Todos' && (
            <span className="text-text-muted">
              {' '}
              en la categoría &quot;{activeCategory}&quot;
            </span>
          )}
        </p>
      </div>

      {/* Grid de productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-text-muted mb-4">
            <Filter className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            No se encontraron productos
          </h3>
          <p className="text-text-secondary mb-4">
            {activeCategory === 'Todos'
              ? 'No hay productos disponibles en este momento.'
              : `No hay productos en la categoría &quot;${activeCategory}&quot;.`}
          </p>
          <Button onClick={clearFilter} variant="outline">
            Ver todos los productos
          </Button>
        </div>
      )}

      {/* Botón para volver a todos los productos si hay filtro activo */}
      {activeCategory !== 'Todos' && filteredProducts.length > 0 && (
        <div className="text-center">
          <Button onClick={clearFilter} variant="outline" size="lg">
            Ver todos los productos
          </Button>
        </div>
      )}
    </div>
  );
}
