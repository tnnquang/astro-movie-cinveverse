import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  className,
  style,
  ...props
}) => {
  const baseStyles = 'animate-shimmer bg-neutral-800';

  const variants = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const inlineStyle = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%'),
    ...style,
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      // eslint-disable-next-line react-dom/no-unsafe-target-blank
      style={inlineStyle}
      role="status"
      aria-label="Loading..."
      {...props}
    />
  );
};

Skeleton.displayName = 'Skeleton';

// Skeleton variants for common use cases
export const MovieCardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('flex flex-col gap-3', className)}>
    <Skeleton variant="rectangular" className="aspect-[2/3] w-full rounded-xl" />
    <div className="space-y-2">
      <Skeleton variant="text" width="90%" className="h-5" />
      <div className="flex justify-between">
        <Skeleton variant="text" width="40%" className="h-3" />
        <Skeleton variant="text" width="20%" className="h-3" />
      </div>
    </div>
  </div>
);

export const MovieGridSkeleton: React.FC<{ count?: number; className?: string }> = ({
  count = 12,
  className,
}) => (
  <div
    className={cn(
      'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8',
      className
    )}
  >
    {Array.from({ length: count }).map((_, i) => (
      <MovieCardSkeleton key={i} />
    ))}
  </div>
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className,
}) => (
  <div className={cn('space-y-2', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} variant="text" width={i === lines - 1 ? '70%' : '100%'} />
    ))}
  </div>
);
