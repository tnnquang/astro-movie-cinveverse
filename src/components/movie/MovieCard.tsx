import React from 'react';
import { cn } from '@/lib/utils/cn';
import { getImageUrl } from '@/lib/api/client';
import type { Film } from '@/types/film';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Play } from 'lucide-react';

export interface MovieCardProps {
  movie: Film;
  variant?: 'default' | 'compact' | 'featured';
  showMeta?: boolean;
  onAddToWatchlist?: () => void;
  className?: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  variant = 'default',
  showMeta = true,
  onAddToWatchlist,
  className,
}) => {
  const imageUrl = getImageUrl(movie.poster_url || movie.thumb_url);
  const detailUrl = `/phim/${movie.slug}`;

  return (
    <div
      className={cn(
        'group relative h-[320px] w-full overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:shadow-glow-primary/40',
        className
      )}
    >
      {/* Liquid Border Effect */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/0 group-hover:from-primary-500/50 group-hover:to-secondary-500/50 transition-colors duration-500 z-20 pointer-events-none"></div>

      {/* Full Background Image */}
      <a
        href={detailUrl}
        className="block h-full w-full relative z-10"
        aria-label={`View details for ${movie.name}`}
      >
        <OptimizedImage
          src={getImageUrl(movie.poster_url || movie.thumb_url, { width: 400, quality: 85 })}
          alt={movie.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Vivid Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </a>

      {/* Hover Overlay - Content & Actions */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 z-30 pointer-events-none">
        {/* Play Button (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-glow-primary group-hover:bg-primary-500 transition-colors duration-300">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </div>
        </div>

        {/* Watchlist Button (Top Right) */}
        {onAddToWatchlist && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToWatchlist();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-primary-500 text-white backdrop-blur-md border border-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 pointer-events-auto"
            title="Thêm vào danh sách xem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        )}

        {/* Text Content */}
        {showMeta && (
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <a href={detailUrl} className="block pointer-events-auto">
              <h3 className="font-display text-lg font-bold text-white leading-tight line-clamp-2 drop-shadow-lg group-hover:text-primary-300 transition-colors">
                {movie.name}
              </h3>
            </a>

            <div className="flex items-center justify-between text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="line-clamp-1 flex-1 mr-2 text-neutral-300 font-body">
                {movie.origin_name || movie.name}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-sm">
                {movie.year}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
