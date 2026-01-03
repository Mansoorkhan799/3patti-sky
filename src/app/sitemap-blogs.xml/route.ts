import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattiskygame.com.pk';
  const currentDate = new Date().toISOString();
  
  // Define all blog posts
  const blogPosts = [
    {
      url: `${baseUrl}/blog`,
      lastMod: currentDate,
      changeFreq: 'weekly',
      priority: '0.8',
      title: '3Patti Sky Blog - Gaming News and Guides',
    },
    {
      url: `${baseUrl}/blog/is-3patti-sky-real-or-fake`,
      lastMod: '2026-01-03T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: 'Is 3Patti Sky Real or Fake to Earn Money? Complete Guide 2026',
    },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${blogPosts.map(post => `  <url>
    <loc>${post.url}</loc>
    <lastmod>${post.lastMod}</lastmod>
    <changefreq>${post.changeFreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

