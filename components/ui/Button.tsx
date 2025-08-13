import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400 shadow-lg hover:shadow-xl',
    secondary:
      'bg-accent-500 text-background hover:bg-accent-600 focus:ring-accent-400 shadow-lg hover:shadow-xl font-semibold',
    outline:
      'border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-background focus:ring-accent-400',
    neon: 'bg-accent-500 text-background hover:bg-accent-600 focus:ring-accent-400 shadow-neon hover:shadow-neon-lg font-bold animate-glow',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
