import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

// Hardcoded data (should match tim-kiem.astro)
const categories = [
  { value: 'hanh-dong', label: 'Hành Động' },
  { value: 'tinh-cam', label: 'Tình Cảm' },
  { value: 'hai-huoc', label: 'Hài Hước' },
  { value: 'co-trang', label: 'Cổ Trang' },
  { value: 'tam-ly', label: 'Tâm Lý' },
  { value: 'hinh-su', label: 'Hình Sự' },
  { value: 'chien-tranh', label: 'Chiến Tranh' },
  { value: 'the-thao', label: 'Thể Thao' },
  { value: 'vo-thuat', label: 'Võ Thuật' },
  { value: 'vien-tuong', label: 'Viễn Tưởng' },
  { value: 'phieu-luu', label: 'Phiêu Lưu' },
  { value: 'khoa-hoc', label: 'Khoa Học' },
  { value: 'kinh-di', label: 'Kinh Dị' },
  { value: 'am-nhac', label: 'Âm Nhạc' },
  { value: 'than-thoai', label: 'Thần Thoại' },
  { value: 'tai-lieu', label: 'Tài Liệu' },
  { value: 'gia-dinh', label: 'Gia Đình' },
  { value: 'chinh-kich', label: 'Chính Kịch' },
  { value: 'bi-an', label: 'Bí Ẩn' },
  { value: 'hoc-duong', label: 'Học Đường' },
];

const countries = [
  { value: 'trung-quoc', label: 'Trung Quốc' },
  { value: 'han-quoc', label: 'Hàn Quốc' },
  { value: 'nhat-ban', label: 'Nhật Bản' },
  { value: 'au-my', label: 'Âu Mỹ' },
  { value: 'thai-lan', label: 'Thái Lan' },
  { value: 'hong-kong', label: 'Hồng Kông' },
  { value: 'dai-loan', label: 'Đài Loan' },
  { value: 'viet-nam', label: 'Việt Nam' },
  { value: 'an-do', label: 'Ấn Độ' },
  { value: 'phap', label: 'Pháp' },
  { value: 'anh', label: 'Anh' },
  { value: 'canada', label: 'Canada' },
  { value: 'duc', label: 'Đức' },
  { value: 'tay-ban-nha', label: 'Tây Ban Nha' },
];

const types = [
  { value: 'single', label: 'Phim Lẻ' },
  { value: 'series', label: 'Phim Bộ' },
  { value: 'hoathinh', label: 'Hoạt Hình' },
];

const sorts = [
  { value: 'modified.time', label: 'Mới cập nhật' },
  { value: 'created.time', label: 'Mới đăng' },
  { value: 'year', label: 'Năm sản xuất' },
  { value: 'view', label: 'Lượt xem' },
];

// Custom Select Component
interface CustomSelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect = ({
  label,
  value,
  options,
  onChange,
  placeholder = 'Tất cả',
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className="space-y-1.5" ref={containerRef}>
      <label className="text-xs font-medium text-text-muted uppercase tracking-wider pl-1">
        {label}
      </label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white transition-all duration-200',
            'hover:bg-white/10 hover:border-white/20',
            isOpen && 'border-primary-500/50 ring-1 ring-primary-500/50 bg-white/10'
          )}
        >
          <span className={cn('truncate', !value && 'text-text-muted')}>{selectedLabel}</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 text-text-muted transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 mt-2 z-50 max-h-60 overflow-y-auto custom-scrollbar bg-[#1a1f2e] border border-white/10 rounded-xl shadow-xl p-1.5"
            >
              <div
                onClick={() => {
                  onChange('');
                  setIsOpen(false);
                }}
                className={cn(
                  'flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors',
                  value === ''
                    ? 'bg-primary-500/20 text-primary-200'
                    : 'text-text-secondary hover:bg-white/5 hover:text-white'
                )}
              >
                <span>{placeholder}</span>
                {value === '' && <Check className="w-4 h-4" />}
              </div>

              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors',
                    value === option.value
                      ? 'bg-primary-500/20 text-primary-200'
                      : 'text-text-secondary hover:bg-white/5 hover:text-white'
                  )}
                >
                  <span>{option.label}</span>
                  {value === option.value && <Check className="w-4 h-4" />}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    country: '',
    year: '',
    type: '',
    sort: '',
  });
  const [showFilters, setShowFilters] = useState(true); // Default to true for better UX
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (filters.category) params.set('category', filters.category);
    if (filters.country) params.set('country', filters.country);
    if (filters.year) params.set('year', filters.year);
    if (filters.type) params.set('type', filters.type);
    if (filters.sort) params.set('sort', filters.sort);

    window.location.href = `/tim-kiem?${params.toString()}`;
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      country: '',
      year: '',
      type: '',
      sort: '',
    });
    setKeyword('');
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors focus-ring group"
        aria-label="Search movies"
        title="Search"
      >
        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-3xl bg-[#0f172a]/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] backdrop-blur-xl"
            >
              {/* Header / Search Input */}
              <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/5">
                <Search className="w-6 h-6 text-primary-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tìm kiếm phim, diễn viên, đạo diễn..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-text-muted text-xl font-medium"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-text-muted hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Filters Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                    <Filter className="w-4 h-4 text-primary-500" />
                    Bộ lọc tìm kiếm
                  </h3>
                  {(keyword || Object.values(filters).some(Boolean)) && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-text-muted hover:text-red-400 transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
                    >
                      Xóa tất cả
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CustomSelect
                    label="Thể Loại"
                    value={filters.category}
                    options={categories}
                    onChange={(val) => setFilters({ ...filters, category: val })}
                  />
                  <CustomSelect
                    label="Quốc Gia"
                    value={filters.country}
                    options={countries}
                    onChange={(val) => setFilters({ ...filters, country: val })}
                  />
                  <CustomSelect
                    label="Loại Phim"
                    value={filters.type}
                    options={types}
                    onChange={(val) => setFilters({ ...filters, type: val })}
                  />
                  <CustomSelect
                    label="Năm Phát Hành"
                    value={filters.year}
                    options={Array.from({ length: 15 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return { value: String(year), label: String(year) };
                    })}
                    onChange={(val) => setFilters({ ...filters, year: val })}
                  />
                  <CustomSelect
                    label="Sắp Xếp"
                    value={filters.sort}
                    options={sorts}
                    onChange={(val) => setFilters({ ...filters, sort: val })}
                    placeholder="Mặc định"
                  />
                </div>

                {/* Quick Tags (Optional enhancement) */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
                    Từ khóa phổ biến
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Hành động', 'Hàn Quốc', 'Anime', 'Kinh dị', '2024', 'Netflix'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setKeyword(tag)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-sm text-text-secondary hover:text-white transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="p-6 border-t border-white/10 bg-black/20 flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={handleSearch}
                  className="px-8 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 shadow-glow-primary/30 transition-all transform hover:scale-105 active:scale-95"
                >
                  Tìm kiếm ngay
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
