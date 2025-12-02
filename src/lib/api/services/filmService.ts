// CineVerse Film Service
import { fetchApi } from '../client';
import type {
    Film,
    PaginationParams,
    PaginationCursor,
    FilterFilmsDto,
    AdvanceFilterDto,
    EpisodeServer,
} from '@/types/film';

export const filmService = {
    // Get all films with pagination
    async getFilms(params?: PaginationParams) {
        const query = new URLSearchParams(params as Record<string, string>).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film${query ? `?${query}` : ''}`
        );
    },

    // Get film by slug
    async getFilmBySlug(slug: string) {
        return fetchApi<Film>(`/crawler/ophim/info/${slug}`);
    },

    // Get film episodes
    async getFilmEpisodes(slug: string) {
        return fetchApi<EpisodeServer[]>(`/crawler/ophim/info/${slug}/episodes`);
    },

    // Get specific episode
    async getEpisode(slug: string, episode: string, serverName?: string) {
        const query = serverName ? `?serverName=${encodeURIComponent(serverName)}` : '';
        return fetchApi<unknown>(`/crawler/ophim/info/${slug}/episodes/${episode}${query}`);
    },

    // Get hot/trending films
    async getHotFilms(limit = 20) {
        return fetchApi<{ data: Film[] }>(`/crawler/ophim/hot?limit=${limit}`);
    },

    // Search films
    async searchFilms(keyword: string) {
        return fetchApi<{ data: Film[] }>(`/crawler/ophim/search/${encodeURIComponent(keyword)}`);
    },

    // Filter films
    async filterFilms(filter: FilterFilmsDto) {
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>('/crawler/ophim/search', {
            method: 'POST',
            body: JSON.stringify(filter),
        });
    },

    // Advanced filter
    async advancedFilter(filter: AdvanceFilterDto) {
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            '/crawler/ophim/advance-filter',
            {
                method: 'POST',
                body: JSON.stringify(filter),
            }
        );
    },

    // Get films by type
    async getFilmsByType(type: 'hoathinh' | 'single' | 'series', params?: PaginationParams) {
        const query = new URLSearchParams({ type, ...(params as Record<string, string>) }).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film-by-type?${query}`
        );
    },

    // Get films by category
    async getFilmsByCategory(category: string, params?: PaginationParams) {
        const query = new URLSearchParams({
            category,
            ...(params as Record<string, string>),
        }).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film-by-category?${query}`
        );
    },

    // Get films by country
    async getFilmsByCountry(country: string, params?: PaginationParams) {
        const query = new URLSearchParams({
            country,
            ...(params as Record<string, string>),
        }).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film-by-country?${query}`
        );
    },

    // Get films by year
    async getFilmsByYear(year: number, params?: PaginationParams) {
        const query = new URLSearchParams({
            year: year.toString(),
            ...(params as Record<string, string>),
        }).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film-by-year?${query}`
        );
    },

    // Get cinema films
    async getCinemaFilms(params?: PaginationParams) {
        const query = new URLSearchParams(params as Record<string, string>).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/cinema${query ? `?${query}` : ''}`
        );
    },

    // Get films by actor
    async getFilmsByActor(actor: string, params?: PaginationParams) {
        const query = new URLSearchParams({
            actor,
            ...(params as Record<string, string>),
        }).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film-by-actor?${query}`
        );
    },

    // Get films by director
    async getFilmsByDirector(director: string, params?: PaginationParams) {
        const query = new URLSearchParams({
            director,
            ...(params as Record<string, string>),
        }).toString();
        return fetchApi<{ data: Film[]; nextCursor?: PaginationCursor }>(
            `/crawler/ophim/list-film-by-director?${query}`
        );
    },

    // Increment view count
    async incrementView(slug: string) {
        return fetchApi<{ success: boolean }>(`/crawler/ophim/update-view/${slug}`);
    },
};
