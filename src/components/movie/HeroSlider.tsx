import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, A11y } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { getImageUrl } from '@/lib/api/client';
import type { Film } from '@/types/film';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface HeroSliderProps {
  movies: Film[];
  className?: string;
}

import { QueryProvider } from '@/components/providers/QueryProvider';

const HeroSliderContent: React.FC<HeroSliderProps> = ({ movies, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!movies || movies.length === 0) return null;

  return (
    <section
      className={cn(
        'relative w-full h-[50vh] min-h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden group/slider',
        className
      )}
      aria-label="Featured movies"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, A11y]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass:
            'w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 cursor-pointer transition-all duration-300 hover:bg-white/80 mx-1.5',
          bulletActiveClass: '!bg-primary-500 !w-6 md:!w-8',
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {movies.map((movie, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={movie._id} className="relative h-full w-full">
              {/* Background Image with Zoom Effect */}
              {/* Background Layer - Blurred & Darkened */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay base */}
                <OptimizedImage
                  src={getImageUrl(movie.poster_url || movie.thumb_url, {
                    width: 100,
                    quality: 50,
                  })}
                  alt=""
                  className="w-full h-full object-cover blur-3xl opacity-50 scale-110"
                  priority={index === 0}
                />
                {/* Gradient Overlays for smooth transitions */}
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent z-10" />
              </div>

              {/* Content Container */}
              <div className="relative h-full container-custom flex items-center z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full pt-20 pb-10">
                  {/* Text Content (Left) */}
                  <div className="md:col-span-7 lg:col-span-6 space-y-6 order-2 md:order-1">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="space-y-6"
                        >
                          {/* Badges */}
                          <div className="flex flex-wrap gap-3">
                            {movie.quality && (
                              <Badge
                                variant="primary"
                                className="text-sm px-3 py-1 shadow-glow-primary"
                              >
                                {movie.quality}
                              </Badge>
                            )}
                            {movie.lang && (
                              <Badge
                                variant="secondary"
                                className="text-sm px-3 py-1 border border-yellow-500/30"
                              >
                                {movie.lang}
                              </Badge>
                            )}
                            <Badge
                              variant="outline"
                              className="text-sm px-3 py-1 bg-black/40 backdrop-blur-sm"
                            >
                              {movie.year}
                            </Badge>
                          </div>

                          {/* Title */}
                          <div>
                            <h1 className="heading-1 text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight leading-tight">
                              {movie.name}
                            </h1>
                            {movie.origin_name && movie.origin_name !== movie.name && (
                              <p className="text-xl md:text-2xl text-primary-200/80 font-display mt-2 font-medium italic">
                                {movie.origin_name}
                              </p>
                            )}
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-4 text-base md:text-lg text-neutral-300 font-medium">
                            {movie.episode_current && (
                              <span className="text-secondary-400">{movie.episode_current}</span>
                            )}
                            {movie.time && (
                              <>
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                                <span>{movie.time}</span>
                              </>
                            )}
                            {movie.view > 0 && (
                              <>
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                                <span>{movie.view.toLocaleString()} views</span>
                              </>
                            )}
                          </div>

                          {/* Description */}
                          {movie.content && (
                            <p className="text-neutral-200 line-clamp-3 text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-md">
                              {movie.content.replace(/<[^>]*>/g, '')}
                            </p>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                              as="a"
                              href={`/phim/${movie.slug}/xem-phim`}
                              size="lg"
                              variant="primary"
                              className="group shadow-glow-primary hover:scale-105 transition-transform duration-300"
                              icon={
                                <Play className="w-6 h-6 fill-current group-hover:animate-pulse" />
                              }
                            >
                              Xem Ngay
                            </Button>

                            <Button
                              as="a"
                              href={`/phim/${movie.slug}`}
                              size="lg"
                              variant="secondary"
                              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/30 text-white"
                              icon={<Info className="w-6 h-6" />}
                            >
                              Chi Tiết
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Poster Image (Right) - Hidden on mobile, visible on tablet+ */}
                  <div className="hidden md:block md:col-span-5 lg:col-span-6 relative order-1 md:order-2 h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 50, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 50, scale: 0.9 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative w-[280px] lg:w-[350px] aspect-[2/3] rounded-xl overflow-hidden shadow-2xl shadow-primary-500/20 group-hover/slider:shadow-primary-500/40 transition-shadow duration-500 rotate-3 hover:rotate-0"
                        >
                          <OptimizedImage
                            src={getImageUrl(movie.poster_url || movie.thumb_url, {
                              width: 400,
                              quality: 90,
                            })}
                            alt={movie.name}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-primary-600/90 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:scale-110 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-primary-600/90 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:scale-110 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-2" />
    </section>
  );
};

export const HeroSlider: React.FC<HeroSliderProps> = (props) => (
  <QueryProvider>
    <HeroSliderContent {...props} />
  </QueryProvider>
);
