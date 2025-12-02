// CineVerse Admin Service
import { fetchApi } from '../client';

export const adminService = {
    // Start crawling
    async startCrawl(params: { start: number; end: number; crawlAll?: boolean }) {
        return fetchApi<{ success: boolean }>('/crawler/ophim', {
            method: 'POST',
            body: JSON.stringify(params),
        });
    },

    // Update film
    async updateFilm(slug: string, data: unknown) {
        return fetchApi<{ success: boolean }>(`/crawler/ophim/info/${slug}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },
};
