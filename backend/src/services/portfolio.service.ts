// services/user.service.ts

import {
  createStock,
  getPortfolio,
  deleteStock,
  updateStock,
  createOrUpdateStock
} from '../data-access/portfolio.da';

export async function createStockUC(body: any): Promise<any> {
  return await createOrUpdateStock(body);
}

export async function deleteStockUC(params: { symbol: string }): Promise<any> {
  const { symbol } = params;
  return await deleteStock(symbol);
}

export async function getPortfolioUC(): Promise<any> {
  return await getPortfolio();
}

export async function updateStockUC(params: { symbol: string }, body: any): Promise<any> {
  const { symbol } = params;
  return await updateStock(symbol, body);
}



