
import React from 'react';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="group bg-neutral-900/40 border border-neutral-800 hover:border-red-600/50 transition-all duration-500 overflow-hidden cursor-pointer relative">
      <div className="aspect-video overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.headline} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] oswald tracking-widest text-red-500 font-bold uppercase py-0.5 px-2 border border-red-500/30">
            {news.category}
          </span>
          <span className="text-[10px] text-neutral-500 font-mono">
            {news.timestamp}
          </span>
        </div>
        <h3 className="text-lg font-bold oswald text-white group-hover:text-red-500 transition-colors leading-tight mb-2">
          {news.headline}
        </h3>
        <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
          {news.summary}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
    </div>
  );
};
