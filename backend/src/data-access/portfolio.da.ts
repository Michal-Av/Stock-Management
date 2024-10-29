// src/services/portfolioService.ts
import { PortfolioModel, Portfolio } from '../models/portfolio.model';

export async function getPortfolio(): Promise<Portfolio[]> {
    return PortfolioModel.find().exec();
  }

export async function createStock(stock: Partial<Portfolio>): Promise<Portfolio> {
    const newStock = new PortfolioModel(stock);
    return newStock.save();
  }

export async function deleteStock(symbol: string): Promise<Portfolio | null> {
  return PortfolioModel.findOneAndDelete({symbol}).exec();
}

export async function updateStock(symbol: string,quantity: number): Promise<Portfolio | null> {
  return await PortfolioModel.findOneAndUpdate({ symbol },{ quantity },{ new: true });
}

export async function createOrUpdateStock(stock: Partial<Portfolio>): Promise<Portfolio | null> {
  try {
    const existingStock = await PortfolioModel.findOne({ symbol: stock.symbol }).exec();

    if (existingStock) {
      // If the stock already exists, increase the quantity
      existingStock.quantity += stock.quantity || 1;
      return existingStock.save(); // Save and return the updated stock
    } else {
      // If the stock doesn't exist, create a new one
      const newStock = new PortfolioModel(stock);
      return newStock.save();
    }
  } catch (error) {
    console.error('Error in createOrUpdateStock:', error);
    throw error;
  }
}
