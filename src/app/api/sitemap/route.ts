import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattiskygame.com.pk';
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: '3Patti Sky Logo',
          caption: 'The official logo of 3Patti Sky gaming platform'
        },
        {
          loc: '/3 Patti Sky.webp',
          title: '3Patti Sky Hero Image',
          caption: '3Patti Sky gaming platform showcase'
        }
      ]
    },
    {
      url: '/download-3patti-sky',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: 'Download 3Patti Sky',
          caption: 'Download 3Patti Sky APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-3patti-sky',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-3patti-sky',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/3patti-sky-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: '3Patti Sky for PC',
          caption: 'Play 3Patti Sky on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/3patti-sky-for-ios',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: '3Patti Sky for iOS',
          caption: 'Download 3Patti Sky for iPhone and iPad'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: 'About 3Patti Sky',
          caption: 'Learn about 3Patti Sky gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: '3Patti Sky Blog',
          caption: 'Guides and tutorials for 3Patti Sky gaming platform'
        }
      ]
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts
  const blogPosts: PageType[] = [
    {
      url: '/blog/is-3patti-sky-real-or-fake',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: '/3PattiSky.webp',
          title: 'Is 3Patti Sky Real or Fake?',
          caption: 'Learn about 3Patti Sky legitimacy and earning potential'
        }
      ]
    }
  ];

  // Only include existing pages
  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 