
import React from 'react';
import { Category } from '../types';

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = [Category.HOME, Category.TECHNOLOGY, Category.FINANCE, Category.ENERGY];

  return (
    <header className="flex flex-col items-center justify-center py-12 bg-black border-b border-red-900/50">
      <div className="mb-4">
        <h1 className="text-5xl md:text-7xl font-black oswald tracking-tighter text-white">
          METAMEDIA <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">NEWS</span>
        </h1>
        <p className="text-center text-gray-400 oswald uppercase tracking-[0.3em] text-xs mt-2">
          Breaking News Crypto Markets
        </p>
      </div>

      <div className="w-full max-w-4xl px-4 mt-8 flex flex-col items-center">
        <div className="w-full line-glow mb-8" />
        
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`oswald text-sm font-bold tracking-widest transition-all duration-300 border-b-2 pb-1 ${
                activeCategory === cat 
                  ? 'text-white border-red-600' 
                  : 'text-gray-500 border-transparent hover:text-white hover:border-red-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
