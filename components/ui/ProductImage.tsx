'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  getCategoryIcon,
  fallbackIconColors,
  iconSizes,
} from '@/lib/imageConfig';

interface ProductImageProps {
  src: string;
  alt: string;
  category: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ProductImage({
  src,
  alt,
  category,
  className = '',
  width = 200,
  height = 200,
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Obtener el icono apropiado para la categoría (fallback final)
  const CategoryIcon = getCategoryIcon(category);

  // Si hay error en la imagen del producto, mostrar logo
  if (imageError && !logoError) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image
          src="/images/logo_niko3d.jpeg"
          alt="Logo Niko3D"
          width={width}
          height={height}
          className="w-full h-full object-contain bg-gradient-to-br from-surface-accent to-surface-primary p-4"
          priority={false}
          loading="lazy"
          onError={() => setLogoError(true)}
        />
      </div>
    );
  }

  // Si también falla el logo, mostrar icono de categoría
  if (imageError && logoError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-surface-accent to-surface-primary flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <CategoryIcon
            className={`${iconSizes.lg} ${fallbackIconColors.secondary} mx-auto mb-2`}
          />
          <p className="text-text-muted text-xs text-center px-2">{category}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Imagen del producto */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        priority={false}
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
