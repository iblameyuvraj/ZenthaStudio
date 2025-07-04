import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://zentha.in';

const staticPages = [
    '',
    '/about',
    '/contact',
    '/blog',
];

function generateSitemap(): string {
    const urls = staticPages
        .map(
            (page) => `
    <url>
        <loc>${BASE_URL}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`
        )
        .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
</urlset>`;
}

export async function GET() {
    return new Response(generateSitemap(), {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}