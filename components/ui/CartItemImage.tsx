'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  getCategoryIcon,
  fallbackIconColors,
  iconSizes,
} from '@/lib/imageConfig';

interface CartItemImageProps {
  src: string;
  alt: string;
  category: string;
  className?: string;
  width?: number;
  height?: number;
}

export function CartItemImage({
  src,
  alt,
  category,
  className = '',
  width = 64,
  height = 64,
}: CartItemImageProps) {
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
          className="w-full h-full object-contain bg-surface-accent rounded-lg p-2"
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
        className={`w-full h-full bg-surface-accent rounded-lg flex items-center justify-center ${className}`}
      >
        <CategoryIcon
          className={`${iconSizes.md} ${fallbackIconColors.secondary}`}
        />
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
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
