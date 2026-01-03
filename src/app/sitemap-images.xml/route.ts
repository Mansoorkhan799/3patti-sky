import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattiskygame.com.pk';
  
  // Define all images used across the site
  const images = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: '3Patti Sky Logo',
          caption: '3Patti Sky - Pakistan Premier Card Gaming Platform',
        },
        {
          loc: `${baseUrl}/3 Patti Sky.webp`,
          title: '3Patti Sky Logo Alternative',
          caption: '3Patti Sky App Logo',
        },
        {
          loc: `${baseUrl}/card-rummy-game.webp`,
          title: '3Patti Sky Game Screenshot 1',
          caption: '3Patti Sky Gaming Interface',
        },
        {
          loc: `${baseUrl}/card-rummy-games.webp`,
          title: '3Patti Sky Game Screenshot 2',
          caption: '3Patti Sky Games Collection',
        },
        {
          loc: `${baseUrl}/Card-rummy-bonuses.webp`,
          title: '3Patti Sky Bonuses',
          caption: '3Patti Sky Bonus System',
        },
        {
          loc: `${baseUrl}/card-rummy-vip-program.webp`,
          title: '3Patti Sky VIP Program',
          caption: '3Patti Sky VIP Benefits',
        },
        {
          loc: `${baseUrl}/card-rummy-add-money.webp`,
          title: '3Patti Sky Add Money',
          caption: '3Patti Sky Deposit System',
        },
        {
          loc: `${baseUrl}/card-rummy-withdraw-money.webp`,
          title: '3Patti Sky Withdraw Money',
          caption: '3Patti Sky Withdrawal System',
        },
      ],
    },
    {
      loc: `${baseUrl}/download-3patti-sky`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: '3Patti Sky Download Page',
          caption: 'Download 3Patti Sky APK for Android',
        },
      ],
    },
    {
      loc: `${baseUrl}/deposit-money-in-3patti-sky`,
      images: [
        {
          loc: `${baseUrl}/card-rummy-add-money.webp`,
          title: '3Patti Sky Deposit Guide',
          caption: 'How to Deposit Money in 3Patti Sky',
        },
      ],
    },
    {
      loc: `${baseUrl}/withdraw-money-from-3patti-sky`,
      images: [
        {
          loc: `${baseUrl}/card-rummy-withdraw-money.webp`,
          title: '3Patti Sky Withdrawal Guide',
          caption: 'How to Withdraw Money from 3Patti Sky',
        },
      ],
    },
    {
      loc: `${baseUrl}/3patti-sky-for-pc`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: '3Patti Sky for PC',
          caption: 'Download 3Patti Sky for PC with Emulator',
        },
      ],
    },
    {
      loc: `${baseUrl}/3patti-sky-for-ios`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: '3Patti Sky for iOS',
          caption: 'Download 3Patti Sky for iPhone and iPad',
        },
      ],
    },
    {
      loc: `${baseUrl}/about-us`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: '3Patti Sky About Us',
          caption: 'About 3Patti Sky Gaming Platform',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: '3Patti Sky Blog',
          caption: '3Patti Sky Gaming News and Guides',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog/is-3patti-sky-real-or-fake`,
      images: [
        {
          loc: `${baseUrl}/3PattiSky.webp`,
          title: 'Is 3Patti Sky Real or Fake',
          caption: 'Complete Guide: 3Patti Sky Legitimacy Review',
        },
      ],
    },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(page => `  <url>
    <loc>${page.loc}</loc>
${page.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

