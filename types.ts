
export interface NewsItem {
  id: string;
  category: string;
  headline: string;
  summary: string;
  timestamp: string;
  imageUrl: string;
}

export interface MarketData {
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
}

export enum Category {
  HOME = 'HOME',
  TECHNOLOGY = 'TECHNOLOGY',
  FINANCE = 'FINANCE',
  ENERGY = 'ENERGY',
  CRYPTO = 'CRYPTO'
}
