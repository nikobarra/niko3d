import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({
  size = 'md',
  showText = true,
  className = '',
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center shadow-neon overflow-hidden`}
      >
        <Image
          src="/images/logo_niko3d.jpeg"
          alt="Niko3D Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {showText && (
        <div>
          <h1
            className={`${textSizes[size]} font-display font-bold text-text-primary tracking-wide`}
          >
            Niko3D
          </h1>
          <p className="text-xs font-body text-text-secondary tracking-wide">
            Tus ideas, en tres dimensiones
          </p>
        </div>
      )}
    </div>
  );
}
