import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattiskygame.com.pk';
  
  const robotsTxt = `# 3Patti Sky Robots.txt
User-agent: *
Allow: /

# Priority pages
Allow: /download-3patti-sky
Allow: /deposit-money-in-3patti-sky
Allow: /withdraw-money-from-3patti-sky
Allow: /3patti-sky-for-pc
Allow: /3patti-sky-for-ios
Allow: /about-us
Allow: /blog
Allow: /blog/is-3patti-sky-real-or-fake

# Standard pages
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer

# Mobile-specific directives
User-agent: Googlebot-Mobile
Allow: /

# Image-specific directives
User-agent: Googlebot-Image
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/image-sitemap.xml

# Crawl delay to prevent server overload
Crawl-delay: 1
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
