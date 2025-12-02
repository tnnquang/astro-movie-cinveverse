import React from 'react';
import { cn } from '@/lib/utils/cn';
import type { Film } from '@/types/film';
import { MovieCard } from './MovieCard';
import { MovieCardSkeleton } from '@/components/ui/Skeleton';

export interface MovieGridProps {
  movies: Film[];
  isLoading?: boolean;
  skeletonCount?: number;
  onAddToWatchlist?: (movie: Film) => void;
  className?: string;
}

import { motion } from 'framer-motion';

import { QueryProvider } from '@/components/providers/QueryProvider';

const MovieGridContent: React.FC<MovieGridProps> = ({
  movies,
  isLoading = false,
  skeletonCount = 12,
  onAddToWatchlist,
  className,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <div className={cn('movie-grid', className)} role="status" aria-live="polite">
        <span className="sr-only">Loading movies...</span>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-text-muted mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-text-primary mb-2">No movies found</h3>
        <p className="text-text-muted">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <motion.div
      className={cn('movie-grid', className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {movies.map((movie) => (
        <motion.div key={movie._id} variants={item}>
          <MovieCard
            movie={movie}
            onAddToWatchlist={onAddToWatchlist ? () => onAddToWatchlist(movie) : undefined}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export const MovieGrid: React.FC<MovieGridProps> = (props) => (
  <QueryProvider>
    <MovieGridContent {...props} />
  </QueryProvider>
);
