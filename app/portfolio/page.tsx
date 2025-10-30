"use client";
import { useMemo, useState } from 'react';
import portfolio from '@/data/portfolio.json';
import PortfolioCard from '@/components/PortfolioCard';

export default function PortfolioPage() {
  const categories = useMemo(() => ['All', ...Array.from(new Set((portfolio as any[]).map(p => p.category)))], []);
  const [filter, setFilter] = useState('All');

  const items = (portfolio as any[]).filter(p => filter === 'All' || p.category === filter);

  return (
    <main className="section">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="input bg-black">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {items.map((item) => (
          <PortfolioCard key={item.id} item={item as any} />
        ))}
      </div>
    </main>
  );
}


