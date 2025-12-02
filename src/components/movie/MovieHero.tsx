import React from 'react';
import { cn } from '@/lib/utils/cn';
import { getImageUrl } from '@/lib/api/client';
import type { Film } from '@/types/film';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface MovieHeroProps {
  movie: Film;
  className?: string;
}

export const MovieHero: React.FC<MovieHeroProps> = ({ movie, className }) => {
  const backdropUrl = getImageUrl(movie.thumb_url || movie.poster_url);
  const watchUrl = `/phim/${movie.slug}/xem-phim`;
  const detailUrl = `/phim/${movie.slug}`;

  return (
    <section
      className={cn('relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden', className)}
      aria-label="Featured movie"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={backdropUrl} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-2xl space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {movie.quality && (
              <Badge variant="primary" size="lg">
                {movie.quality}
              </Badge>
            )}

            {movie.type === 'series' && (
              <Badge variant="secondary" size="lg">
                Phim Bộ
              </Badge>
            )}

            {movie.lang && (
              <Badge variant="default" size="lg">
                {movie.lang}
              </Badge>
            )}

            {movie.chipieurap && (
              <Badge variant="warning" size="lg">
                Phim Chiếu Rạp
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="heading-1 text-white drop-shadow-lg">{movie.name}</h1>

          {/* Original Title */}
          {movie.origin_name && movie.origin_name !== movie.name && (
            <p className="text-xl text-neutral-300">{movie.origin_name}</p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-300">
            <span>{movie.year}</span>
            {movie.time && (
              <>
                <span aria-hidden="true">•</span>
                <span>{movie.time}</span>
              </>
            )}
            {movie.episode_current && (
              <>
                <span aria-hidden="true">•</span>
                <span>
                  {movie.episode_current} / {movie.episode_total || '??'}
                </span>
              </>
            )}
            {movie.view && (
              <>
                <span aria-hidden="true">•</span>
                <span>
                  {movie.view > 1000000
                    ? `${(movie.view / 1000000).toFixed(1)}M`
                    : movie.view > 1000
                      ? `${(movie.view / 1000).toFixed(1)}K`
                      : movie.view}{' '}
                  views
                </span>
              </>
            )}
          </div>

          {/* Description */}
          {movie.content && (
            <p className="text-neutral-200 line-clamp-3 max-w-xl text-lg leading-relaxed">
              {movie.content.replace(/<[^>]*>/g, '')}
            </p>
          )}

          {/* Categories */}
          {movie.category && movie.category.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {movie.category.slice(0, 5).map((cat) => (
                <a
                  key={cat.slug}
                  href={`/the-loai/${cat.slug}`}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full text-sm text-white transition-colors focus-ring"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              as="a"
              href={watchUrl}
              size="lg"
              variant="primary"
              className="shadow-glow-primary"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              }
            >
              Watch Now
            </Button>

            <Button as="a" href={detailUrl} size="lg" variant="secondary">
              More Info
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="bg-white/10 hover:bg-white/20 backdrop-blur"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              aria-label="Add to watchlist"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
