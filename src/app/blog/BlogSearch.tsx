'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (query.trim()) {
        params.set('q', query.trim());
      }
      router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`);
    },
    [query, router]
  );

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2 max-w-xl">
        <input
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="flex-1 px-4 py-2 bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          aria-label="Search blog posts"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-accent hover:bg-accent/90 text-primary font-medium rounded-lg transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
