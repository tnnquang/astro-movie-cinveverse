// CineVerse Search Store
import { atom } from 'nanostores';
import type { Film } from '@/types/film';

export const $searchQuery = atom<string>('');
export const $searchResults = atom<Film[]>([]);
export const $isSearching = atom<boolean>(false);

export function setSearchQuery(query: string) {
    $searchQuery.set(query);
}

export function setSearchResults(results: Film[]) {
    $searchResults.set(results);
}

export function setIsSearching(isSearching: boolean) {
    $isSearching.set(isSearching);
}

export function clearSearch() {
    $searchQuery.set('');
    $searchResults.set([]);
    $isSearching.set(false);
}
