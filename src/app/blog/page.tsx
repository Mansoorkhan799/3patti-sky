import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3Patti Sky Blog - Is 3Patti Sky Real or Fake? | Complete Guide 2026',
  description: 'Discover the truth about 3Patti Sky legitimacy, payment methods, and how to identify fake apps. Complete earning guide for Pakistani players.',
  keywords: ['3Patti Sky blog', '3Patti Sky real or fake', '3Patti Sky legit', '3Patti Sky Pakistan', '3Patti Sky earning guide', '3Patti Sky withdrawal'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">3Patti Sky Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">Stay updated with the latest guides and information about 3Patti Sky</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Post - Is 3Patti Sky Real or Fake */}
        <div className="bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 border-[#FFA500]">
          <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            ⭐ FEATURED
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">Is 3Patti Sky Real or Fake to Earn Money?</h2>
          <p className="text-gray-300 mb-4">Discover the truth about 3Patti Sky legitimacy, payment methods, and how to identify fake apps. Complete guide for 2026.</p>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>📅 January 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
          <Link href="/blog/is-3patti-sky-real-or-fake" className="text-accent hover:underline font-semibold">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
} 