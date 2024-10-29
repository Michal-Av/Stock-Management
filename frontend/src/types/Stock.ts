// src/types/Stock.ts
export interface Stock {
  symbol: string;
    name: string;
    price: number;
    change: number;
    changesPercentage: number;
    dayLow: number;
    dayHigh: number;
    yearLow: number;
    yearHigh: number;
    marketCap: number;
    volume: number;
    avgVolume: number;
    previousClose: number;
    open: number;
    exchange: string;
    pe?: number;
    eps?: number;
    earningsAnnouncement?: string;
    quantity: number;
    purchaseDate?: Date;
}