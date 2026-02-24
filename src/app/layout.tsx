import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://3pattiskygame.com.pk'),
  title: {
    default: "3 Patti Sky Pakistan v1.199 Free Download Official APK",
    template: "%s | 3 Patti Sky"
  },
  description: "Download 3Patti Sky APK, Pakistan's premier card game platform. Play Teen Patti, Rummy, Dragon vs Tiger & more. Win real cash with JazzCash & EasyPaisa. Join 600K+ players!",
  keywords: [
    "3Patti Sky",
    "3 Patti Sky",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  authors: [{ name: "3Patti Sky Team" }],
  creator: "3Patti Sky",
  publisher: "3Patti Sky",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/3-Patti-Sky.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/3-Patti-Sky.webp', type: 'image/webp', sizes: '192x192' },
    ],
    apple: [
      { url: '/3-Patti-Sky.webp', sizes: '180x180', type: 'image/webp' }
    ],
    shortcut: ['/3-Patti-Sky.ico']
  },
  manifest: '/manifest.json',
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://3pattiskygame.com.pk",
  },
  openGraph: {
    title: "3 Patti Sky Pakistan v1.199 Free Download Official APK",
    description: "Join 600K+ players on Pakistan's premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://3pattiskygame.com.pk",
    siteName: "3Patti Sky",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Sky Pakistan v1.199 Free Download Official APK",
    description: "Join 600K+ players on Pakistan's premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@3pattisky",
  },
  applicationName: "3Patti Sky",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Favicon - Multiple formats for best browser support */}
        <link rel="icon" href="/3-Patti-Sky.ico" sizes="32x32" />
        <link rel="icon" href="/3-Patti-Sky.webp" type="image/webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/3-Patti-Sky.webp" sizes="180x180" />
        
        <meta property="og:image" content="https://3pattiskygame.com.pk/3-Patti-Sky.webp" />
        
        {/* Google Analytics - Add your GA4 Measurement ID to NEXT_PUBLIC_GA_ID env var */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main id="main-content" className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTop />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "3Patti Sky",
              "url": "https://3pattiskygame.com.pk",
              "logo": "https://3pattiskygame.com.pk/3-Patti-Sky.webp",
              "description": "3Patti Sky is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
              "sameAs": [
                "https://www.facebook.com/people/3-Patti-Sky/61561881890600/",
                "https://x.com/Teenpattisky"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "3Patti Sky",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "300000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
