export const dynamic = 'force-static';

export default async function handler() {
    const BASE_URL = 'https://zentha.in';

    const staticPages = ['', '/about', '/contact', '/blog'];

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

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
