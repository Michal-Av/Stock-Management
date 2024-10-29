// src/models/portfolioModel.ts
import { Schema, model, Document } from 'mongoose';

export interface Portfolio extends Document {
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

const PortfolioSchema = new Schema<Portfolio>({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    change: { type: Number, required: true },
    changesPercentage: { type: Number, required: true },
    dayLow: { type: Number, required: true },
    dayHigh: { type: Number, required: true },
    yearLow: { type: Number, required: true },
    yearHigh: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    volume: { type: Number, required: true },
    avgVolume: { type: Number, required: true },
    previousClose: { type: Number, required: true },
    open: { type: Number, required: true },
    exchange: { type: String, required: true },
    pe: { type: Number, required: false },
    eps: { type: Number, required: false },
    earningsAnnouncement: { type: String, required: false },
    quantity: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
  });
  
  // Create and export the Portfolio model
  export const PortfolioModel = model<Portfolio>('Portfolio', PortfolioSchema);