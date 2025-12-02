// CineVerse Theme Store
import { persistentAtom } from '@nanostores/persistent';


export type Theme = 'dark' | 'light' | 'system';

export const $theme = persistentAtom<Theme>('theme', 'dark', {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function toggleTheme() {
    const current = $theme.get();
    $theme.set(current === 'dark' ? 'light' : 'dark');
}

export function setTheme(theme: Theme) {
    $theme.set(theme);
}

// Apply theme to document
if (typeof document !== 'undefined') {
    $theme.subscribe((theme) => {
        const effectiveTheme =
            theme === 'system'
                ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                : theme;

        document.documentElement.setAttribute('data-theme', effectiveTheme);
    });

    // Listen for system theme changes
    if ($theme.get() === 'system') {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if ($theme.get() === 'system') {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }
}
