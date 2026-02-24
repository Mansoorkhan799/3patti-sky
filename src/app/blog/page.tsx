import Link from 'next/link';
import { Metadata } from 'next';
import BlogSearch from './BlogSearch';

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
  alternates: {
    canonical: 'https://3pattiskygame.com.pk/blog',
  },
};

const BLOG_POSTS = [
  { slug: 'is-3patti-sky-real-or-fake', title: 'Is 3Patti Sky Real or Fake to Earn Money?', description: 'Discover the truth about 3Patti Sky legitimacy, payment methods, and how to identify fake apps. Complete guide for 2026.', date: 'January 2026', readTime: '7 min read', featured: true },
  { slug: 'how-to-play-3patti-sky', title: 'How to Play 3Patti Sky - Complete Beginner Guide', description: 'Learn how to play 3Patti Sky step by step. Complete beginner guide with rules, gameplay, tips, and strategies for Teen Patti and more.', date: 'January 2026', readTime: '8 min read', featured: false },
  { slug: 'tips-to-win-3patti-sky', title: 'Tips and Strategies to Win in 3Patti Sky', description: 'Learn proven tips and strategies to win in 3Patti Sky. Expert guide on Teen Patti strategies, bankroll management, and winning techniques.', date: 'January 2026', readTime: '9 min read', featured: false },
  { slug: 'how-to-earn-money-3patti-sky', title: 'How to Earn Money in 3Patti Sky', description: 'Learn how to earn real money in 3Patti Sky. Complete guide on earning methods, bonuses, referral program, and withdrawal process.', date: 'January 2026', readTime: '10 min read', featured: false },
  { slug: 'payment-methods-jazzcash-easypaisa', title: '3Patti Sky Payment Methods - JazzCash & EasyPaisa', description: 'Complete guide on using JazzCash and EasyPaisa for deposits and withdrawals in 3Patti Sky. Step-by-step instructions for Pakistani players.', date: 'January 2026', readTime: '7 min read', featured: false },
  { slug: '3patti-sky-features-benefits', title: '3Patti Sky App Features and Benefits', description: 'Discover all the amazing features and benefits of 3Patti Sky app. Learn about games, bonuses, security, and why it\'s the best platform.', date: 'January 2026', readTime: '8 min read', featured: false },
  { slug: 'how-to-create-account-login', title: 'How to Create Account and Login in 3Patti Sky', description: 'Complete step-by-step guide on creating an account and logging in to 3Patti Sky. Learn registration, verification, and login process.', date: 'January 2026', readTime: '6 min read', featured: false },
];

function filterPosts(posts: typeof BLOG_POSTS, query?: string) {
  if (!query || !query.trim()) return posts;
  const q = query.trim().toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
  );
}

export default async function Blog({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const query = params?.q;
  const filteredPosts = filterPosts(BLOG_POSTS, query);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">3Patti Sky Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">Stay updated with the latest guides and information about 3Patti Sky</p>
      
      <BlogSearch />
      
      {query && (
        <p className="text-gray-400 mb-6">
          {filteredPosts.length > 0
            ? `Showing ${filteredPosts.length} result${filteredPosts.length === 1 ? '' : 's'} for &quot;${query}&quot;`
            : `No results found for &quot;${query}&quot;. Showing all posts.`}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(query && filteredPosts.length === 0 ? BLOG_POSTS : filteredPosts).map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all ${post.featured ? 'border-2 border-[#FFA500]' : ''}`}
          >
            {post.featured && (
              <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                ⭐ FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>📅 {post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 