import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400 shadow-lg hover:shadow-xl',
    secondary: 'bg-accent-500 text-background hover:bg-accent-600 focus:ring-accent-400 shadow-lg hover:shadow-xl font-semibold',
    outline: 'border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-background focus:ring-accent-400',
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
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2" />
      )}
    </button>
  );
}
