// CineVerse Metadata Service
import { fetchApi } from '../client';
import type { Category, Country } from '@/types/film';

export const metadataService = {
    // Get all categories
    async getCategories() {
        return fetchApi<Category[]>('/crawler/ophim/categories');
    },

    // Get all countries
    async getCountries() {
        return fetchApi<Country[]>('/crawler/ophim/countries');
    },
};
