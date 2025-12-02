// CineVerse Watch History Store
import { persistentAtom } from '@nanostores/persistent';
import type { HistoryItem } from '@/types/film';

const MAX_HISTORY_ITEMS = 50;

export const $watchHistory = persistentAtom<HistoryItem[]>('history', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function addToHistory(movie: Omit<HistoryItem, 'watchedAt'>) {
    const current = $watchHistory.get();
    // Remove existing entry if present
    const filtered = current.filter((m) => m.slug !== movie.slug);
    // Add to front and limit to MAX_HISTORY_ITEMS
    $watchHistory.set(
        [{ ...movie, watchedAt: new Date().toISOString() }, ...filtered].slice(0, MAX_HISTORY_ITEMS)
    );
}

export function updateProgress(slug: string, episode: string | undefined, progress: number) {
    const current = $watchHistory.get();
    const index = current.findIndex((m) => m.slug === slug);

    if (index >= 0) {
        current[index] = {
            ...current[index],
            episode,
            progress,
            watchedAt: new Date().toISOString(),
        };
        $watchHistory.set([...current]);
    }
}

export function removeFromHistory(slug: string) {
    $watchHistory.set($watchHistory.get().filter((m) => m.slug !== slug));
}

export function clearHistory() {
    $watchHistory.set([]);
}

export function getRecentlyWatched(limit = 10): HistoryItem[] {
    return $watchHistory.get().slice(0, limit);
}

export function getContinueWatching(): HistoryItem[] {
    return $watchHistory.get().filter((item) => item.progress && item.progress > 0 && item.progress < 90);
}
