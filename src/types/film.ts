// CineVerse API Types

export interface Category {
    _id: string;
    name: string;
    slug: string;
}

export interface Country {
    _id: string;
    name: string;
    slug: string;
}

export interface Film {
    _id: string;
    name: string;
    slug: string;
    origin_name: string;
    content: string;
    type: 'series' | 'single' | 'hoathinh';
    status: string;
    poster_url: string;
    thumb_url: string;
    is_copyright: boolean;
    sub_docquyen: boolean;
    chipieurap: boolean;
    trailer_url: string;
    time: string;
    episode_current: string;
    episode_total: string;
    quality: string;
    lang: string;
    notify: string;
    showtimes: string;
    year: number;
    view: number;
    actor: string[];
    director: string[];
    category: Category[];
    country: Country[];
    created: { time: string };
    modified: { time: string };
}

export interface PaginationCursor {
    view: number;
    createdAt: string;
    id: string;
}

export interface PaginationParams {
    limit?: number;
    lastView?: number;
    lastCreatedAt?: string;
    lastId?: string;
    firstView?: number;
    firstCreatedAt?: string;
    firstId?: string;
}

export interface FilterFilmsDto {
    keyword?: string;
    countries?: string[];
    categories?: string[];
    types?: ('series' | 'single' | 'hoathinh')[];
    isCinema?: boolean;
    lastCursor?: PaginationCursor;
    firstCursor?: PaginationCursor;
    limit?: number;
}

export interface FilterOptions {
    countries?: string[];
    categories?: string[];
    types?: ('series' | 'single' | 'hoathinh')[];
    isCinema?: boolean;
}

export interface AdvanceFilterDto {
    keyword?: string;
    include?: FilterOptions;
    exclude?: FilterOptions;
    lastCursor?: PaginationCursor;
    firstCursor?: PaginationCursor;
    limit?: number;
}

export interface Episode {
    _id?: string;
    name: string;
    slug: string;
    filename: string;
    link_embed: string;
    link_m3u8: string;
}

export interface EpisodeServer {
    server_name: string;
    server_data: Episode[];
}

export interface WatchlistItem {
    slug: string;
    name: string;
    poster_url: string;
    addedAt: string;
}

export interface HistoryItem {
    slug: string;
    name: string;
    poster_url: string;
    episode?: string;
    progress?: number;
    watchedAt: string;
}
