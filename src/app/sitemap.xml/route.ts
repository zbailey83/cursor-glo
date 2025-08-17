import { services } from '../../data/services';
import { neighborhoods } from '../../data/neighborhoods';
import { NextResponse } from 'next/server';

const BASE_URL = 'https://thegloalchemist.com'; // Change to your production URL

export async function GET() {
  const staticPages = [
    '',
    'services',
  ];

  // Add neighborhood overview pages
  const neighborhoodOverviewPages = neighborhoods.map(n => `neighborhood/${n}`);

  // Add service/neighborhood combination pages
  const serviceNeighborhoodPages = services.flatMap(s =>
    neighborhoods.map(n => `${s.slug}/${n}`)
  );

  const allPages = [
    ...staticPages,
    ...neighborhoodOverviewPages,
    ...serviceNeighborhoodPages,
  ];

  const urls = allPages.map(path =>
    `<url>
      <loc>${BASE_URL}/${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === '' ? '1.0' : path === 'services' ? '0.9' : path.includes('neighborhood/') ? '0.8' : '0.7'}</priority>
    </url>`
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 