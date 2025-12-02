import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { cn } from '@/lib/utils/cn';
import type { Film } from '@/types/film';
import { MovieCard } from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export interface MovieCarouselProps {
  title: string;
  movies: Film[];
  viewAllLink?: string;
  onAddToWatchlist?: (movie: Film) => void;
  className?: string;
}

import { QueryProvider } from '@/components/providers/QueryProvider';

const MovieCarouselContent: React.FC<MovieCarouselProps> = ({
  title,
  movies,
  viewAllLink,
  onAddToWatchlist,
  className,
}) => {
  const [prevEl, setPrevEl] = React.useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = React.useState<HTMLElement | null>(null);

  if (!movies || movies.length === 0) return null;

  return (
    <section
      className={cn('relative group/carousel w-full max-w-full overflow-hidden', className)}
      aria-labelledby={`${title}-heading`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <h2 id={`${title}-heading`} className="heading-4 text-white">
          {title}
        </h2>

        {viewAllLink && (
          <a
            href={viewAllLink}
            className="text-primary-500 hover:text-primary-400 font-semibold transition-colors focus-ring rounded px-2 text-sm"
          >
            Xem tất cả →
          </a>
        )}
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          spaceBetween={16}
          slidesPerView={2}
          navigation={{
            prevEl,
            nextEl,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
          className="!pb-4 !px-1"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <MovieCard
                movie={movie}
                variant="compact"
                onAddToWatchlist={onAddToWatchlist ? () => onAddToWatchlist(movie) : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={(node) => setPrevEl(node)}
          className={cn(
            'absolute left-0 top-1/2 -translate-y-1/2 z-10',
            'w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white',
            'flex items-center justify-center',
            'opacity-0 group-hover/carousel:opacity-100 transition-all duration-300',
            'hover:bg-primary-600 hover:scale-110 disabled:opacity-0 cursor-pointer'
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={(node) => setNextEl(node)}
          className={cn(
            'absolute right-0 top-1/2 -translate-y-1/2 z-10',
            'w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white',
            'flex items-center justify-center',
            'opacity-0 group-hover/carousel:opacity-100 transition-all duration-300',
            'hover:bg-primary-600 hover:scale-110 disabled:opacity-0 cursor-pointer'
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export const MovieCarousel: React.FC<MovieCarouselProps> = (props) => (
  <QueryProvider>
    <MovieCarouselContent {...props} />
  </QueryProvider>
);
