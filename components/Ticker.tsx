
import React from 'react';
import { MarketData } from '../types';

const INITIAL_MARKET_DATA: MarketData[] = [
  { symbol: 'BTC', price: '$104,400.01', change: '0.80%', isUp: true },
  { symbol: 'BRENT', price: '$84.87', change: '-4.61%', isUp: false },
  { symbol: 'SENSEX', price: '$77,725.05', change: '0.07%', isUp: true },
  { symbol: 'NASDAQ', price: '18,239.50', change: '1.24%', isUp: true },
  { symbol: 'ETH', price: '$3,842.12', change: '-2.15%', isUp: false },
  { symbol: 'GOLD', price: '$2,342.10', change: '0.45%', isUp: true },
  { symbol: 'SOL', price: '$245.30', change: '5.12%', isUp: true },
];

export const Ticker: React.FC = () => {
  const displayData = [...INITIAL_MARKET_DATA, ...INITIAL_MARKET_DATA];

  return (
    <div className="w-full bg-black border-y border-red-500/30 overflow-hidden py-2 select-none relative z-50">
      <div className="animate-marquee whitespace-nowrap">
        {displayData.map((item, idx) => (
          <div key={idx} className="flex items-center mx-8 font-bold oswald text-sm tracking-widest uppercase">
            <span className="text-white mr-2">{item.symbol}</span>
            <span className="text-white mr-2">{item.price}</span>
            <span className={item.isUp ? 'text-green-400' : 'text-red-500'}>
              {item.isUp ? '▲' : '▼'} {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
