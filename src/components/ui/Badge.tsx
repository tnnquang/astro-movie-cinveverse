import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body font-semibold rounded-md';

  const variants = {
    default: 'bg-neutral-800 text-neutral-300',
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-600 text-neutral-950',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-neutral-950',
    error: 'bg-red-600 text-white',
    outline: 'border border-neutral-700 text-neutral-300 bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
