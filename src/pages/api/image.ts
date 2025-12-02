import type { APIRoute } from 'astro';
import sharp from 'sharp';

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const imageUrl = url.searchParams.get('url');
    const width = url.searchParams.get('w');
    const height = url.searchParams.get('h');
    const quality = url.searchParams.get('q') || '80';
    const format = url.searchParams.get('fmt') || 'webp';

    if (!imageUrl) {
        return new Response('Missing "url" parameter', { status: 400 });
    }

    try {
        // Fetch the remote image
        const response = await fetch(imageUrl);
        if (!response.ok) {
            return new Response(`Failed to fetch image: ${response.statusText}`, { status: response.status });
        }

        const buffer = await response.arrayBuffer();
        let transform = sharp(Buffer.from(buffer));

        // Resize if dimensions provided
        if (width || height) {
            transform = transform.resize({
                width: width ? parseInt(width) : undefined,
                height: height ? parseInt(height) : undefined,
                fit: 'cover',
                position: 'center',
            });
        }

        // Convert format
        if (format === 'avif') {
            transform = transform.avif({ quality: parseInt(quality) });
        } else {
            transform = transform.webp({ quality: parseInt(quality) });
        }

        const outputBuffer = await transform.toBuffer();

        return new Response(outputBuffer as unknown as BodyInit, {
            headers: {
                'Content-Type': `image/${format}`,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Image optimization error:', error);
        return new Response('Image processing failed', { status: 500 });
    }
};
