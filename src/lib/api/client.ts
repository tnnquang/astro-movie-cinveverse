// CineVerse API Client Configuration
// Using fetch for API calls (openapi-fetch will be used once schema is generated)

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'https://cinevserse-api.nhatquang.shop';

export class ApiError extends Error {
    constructor(message: string, public details?: unknown) {
        super(message);
        this.name = 'ApiError';
    }
}

export async function fetchApi<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'API request failed' }));
            throw new ApiError(error.message || `HTTP ${response.status}`, error);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            error instanceof Error ? error.message : 'An unknown error occurred',
            error
        );
    }
}

// Helper function for image URLs
export function getImageUrl(
    path: string,
    options?: { width?: number; height?: number; quality?: number; format?: 'webp' | 'avif' }
): string {
    if (!path) return '';

    // Construct the full source URL
    const sourceUrl = path.startsWith('http') ? path : `https://phimimg.com/${path}`;

    // Use local proxy for optimization
    // Use a dummy base to leverage URLSearchParams, then return only the path + query
    // This avoids "window is not defined" during SSR and works with relative paths
    const proxyUrl = new URL('/api/image', 'http://dummy-base');
    proxyUrl.searchParams.set('url', sourceUrl);

    if (options?.width) proxyUrl.searchParams.set('w', options.width.toString());
    if (options?.height) proxyUrl.searchParams.set('h', options.height.toString());
    if (options?.quality) proxyUrl.searchParams.set('q', options.quality.toString());
    if (options?.format) proxyUrl.searchParams.set('fmt', options.format);

    return `${proxyUrl.pathname}${proxyUrl.search}`;
}

export { API_BASE_URL };
