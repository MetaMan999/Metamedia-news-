
import React, { useState, useEffect, useCallback } from 'react';
import { Category, NewsItem } from './types';
import { Ticker } from './components/Ticker';
import { Header } from './components/Header';
import { NewsCard } from './components/NewsCard';
import { fetchNewsForCategory } from './services/geminiService';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.HOME);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadNews = useCallback(async (cat: Category) => {
    setLoading(true);
    const data = await fetchNewsForCategory(cat);
    setNews(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadNews(activeCategory);
  }, [activeCategory, loadNews]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Ticker />
      
      <Header 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-4 w-1 bg-red-600 shadow-[0_0_8px_#ef4444]" />
          <h2 className="oswald text-xl tracking-[0.2em] font-bold uppercase">
            LATEST FROM {activeCategory}
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-neutral-900 border border-neutral-800 h-[350px]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-neutral-900 py-20 mt-20 bg-neutral-950">
        <div className="container mx-auto px-4 text-center">
          <div className="oswald text-2xl font-black mb-4">
            METAMEDIA <span className="text-red-600">NEWS</span>
          </div>
          <p className="text-neutral-600 text-[10px] tracking-widest uppercase mb-6">
            © 2024 METAMEDIA NEWS. ALL RIGHTS RESERVED.<br/>
            Global Market Intelligence and Cryptocurrency Analysis.
          </p>
          <div className="flex justify-center gap-6">
            {['Twitter', 'Discord', 'Terminal', 'Press'].map(link => (
              <a key={link} href="#" className="text-neutral-500 hover:text-white text-[10px] uppercase oswald tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
