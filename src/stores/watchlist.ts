// CineVerse Watchlist Store
import { persistentAtom } from '@nanostores/persistent';
import type { WatchlistItem } from '@/types/film';

export const $watchlist = persistentAtom<WatchlistItem[]>('watchlist', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function addToWatchlist(movie: Omit<WatchlistItem, 'addedAt'>) {
    const current = $watchlist.get();
    if (!current.find((m) => m.slug === movie.slug)) {
        $watchlist.set([...current, { ...movie, addedAt: new Date().toISOString() }]);
    }
}

export function removeFromWatchlist(slug: string) {
    $watchlist.set($watchlist.get().filter((m) => m.slug !== slug));
}

export function isInWatchlist(slug: string): boolean {
    return $watchlist.get().some((m) => m.slug === slug);
}

export function toggleWatchlist(movie: Omit<WatchlistItem, 'addedAt'>) {
    if (isInWatchlist(movie.slug)) {
        removeFromWatchlist(movie.slug);
    } else {
        addToWatchlist(movie);
    }
}

export function clearWatchlist() {
    $watchlist.set([]);
}
