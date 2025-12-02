import React from 'react';
import { cn } from '@/lib/utils/cn';
import { ChevronDown, Filter, X } from 'lucide-react';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterBarProps {
  categories: FilterOption[];
  countries: FilterOption[];
  currentFilters: {
    category?: string;
    country?: string;
    year?: string;
    type?: string;
    sort?: string;
  };
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  countries,
  currentFilters,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleFilterChange = (key: string, value: string) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    // Reset pagination when filtering
    url.searchParams.delete('lastId');
    url.searchParams.delete('lastView');
    url.searchParams.delete('lastCreatedAt');
    url.searchParams.delete('firstId');
    url.searchParams.delete('firstView');
    url.searchParams.delete('firstCreatedAt');

    window.location.href = url.toString();
  };

  const clearFilters = () => {
    window.location.href = '/tim-kiem';
  };

  const years = Array.from({ length: 2025 - 2000 + 1 }, (_, i) => ({
    value: (2025 - i).toString(),
    label: (2025 - i).toString(),
  }));

  const types = [
    { value: 'single', label: 'Phim Lẻ' },
    { value: 'series', label: 'Phim Bộ' },
    { value: 'hoathinh', label: 'Hoạt Hình' },
  ];

  const sorts = [
    { value: 'newest', label: 'Mới nhất' },
    { value: 'view', label: 'Xem nhiều nhất' },
  ];

  const hasActiveFilters = Object.values(currentFilters).some(Boolean);

  return (
    <div className={cn('w-full', className)}>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800 text-white mb-4"
      >
        <span className="flex items-center gap-2 font-medium">
          <Filter className="w-5 h-5 text-primary-500" />
          Bộ lọc tìm kiếm
        </span>
        <ChevronDown className={cn('w-5 h-5 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {/* Filter Grid */}
      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4',
          'md:grid', // Always show on desktop
          !isOpen && 'hidden' // Toggle on mobile
        )}
      >
        {/* Category */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Thể loại
          </label>
          <div className="relative">
            <select
              value={currentFilters.category || ''}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors cursor-pointer"
              title="Select category"
            >
              <option value="">Tất cả thể loại</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        {/* Country */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Quốc gia
          </label>
          <div className="relative">
            <select
              value={currentFilters.country || ''}
              onChange={(e) => handleFilterChange('country', e.target.value)}
              className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors cursor-pointer"
              title="Select country"
            >
              <option value="">Tất cả quốc gia</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        {/* Year */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Năm phát hành
          </label>
          <div className="relative">
            <select
              value={currentFilters.year || ''}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors cursor-pointer"
              title="Select year"
            >
              <option value="">Tất cả năm</option>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        {/* Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Định dạng
          </label>
          <div className="relative">
            <select
              value={currentFilters.type || ''}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors cursor-pointer"
              title="Select type"
            >
              <option value="">Tất cả định dạng</option>
              {types.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        {/* Sort */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Sắp xếp
          </label>
          <div className="relative">
            <select
              value={currentFilters.sort || 'newest'}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors cursor-pointer"
              title="Select sort order"
            >
              {sorts.map((sort) => (
                <option key={sort.value} value={sort.value}>
                  {sort.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Active Filters Summary & Clear */}
      {hasActiveFilters && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">{/* Chips could go here if needed */}</div>
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
};
