import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export interface PaginationProps {
  currentPage?: number; // Optional, if we can track it
  hasPrevPage: boolean;
  hasNextPage: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  prevLink?: string;
  nextLink?: string;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  hasPrevPage,
  hasNextPage,
  prevLink,
  nextLink,
  className,
}) => {
  if (!hasPrevPage && !hasNextPage) return null;

  return (
    <div className={cn('flex items-center justify-center gap-4 mt-12', className)}>
      {/* Previous Button */}
      {hasPrevPage ? (
        <a
          href={prevLink}
          className={cn(
            'flex items-center gap-2 px-6 py-3 rounded-lg',
            'bg-neutral-800 text-white font-medium transition-all duration-300',
            'hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/20 hover:-translate-y-0.5',
            'focus-ring'
          )}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Trang trước</span>
        </a>
      ) : (
        <button
          disabled
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 text-neutral-600 cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Trang trước</span>
        </button>
      )}

      {/* Next Button */}
      {hasNextPage ? (
        <a
          href={nextLink}
          className={cn(
            'flex items-center gap-2 px-6 py-3 rounded-lg',
            'bg-neutral-800 text-white font-medium transition-all duration-300',
            'hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/20 hover:-translate-y-0.5',
            'focus-ring'
          )}
        >
          <span>Trang sau</span>
          <ChevronRight className="w-5 h-5" />
        </a>
      ) : (
        <button
          disabled
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 text-neutral-600 cursor-not-allowed"
        >
          <span>Trang sau</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
