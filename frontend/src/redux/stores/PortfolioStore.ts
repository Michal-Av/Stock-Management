// src/redux/stores/PortfolioStore.ts
import { makeAutoObservable, runInAction } from 'mobx';
import { Stock } from '../../types/Stock';
import {
  addStock as apiAddStock,
  getPortfolio,
  updateStock,
  deleteStock,
  getStockQuote
} from '../../services/api-stock'; // Import necessary API services

class PortfolioStore {
  portfolio: Stock[] = []; // Store for portfolio data
  selectedStock: Stock | null = null;

  constructor() {
    makeAutoObservable(this); // Enable MobX reactivity
  }

  // Fetch portfolio data from the server
  async fetchPortfolio() {
    try {
      const data = await getPortfolio(); // Fetch portfolio from the API
      runInAction(() => {
        this.portfolio = data; // Update portfolio state
      });
    } catch (error) {
      console.error('Failed to fetch portfolio:', error);
    }
  }

    // Fetch individual stock details and store them in `selectedStock`
    async fetchStockDetails(symbol: string) {
      try {
        const response = await getStockQuote(symbol);
        runInAction(() => {
          this.selectedStock = response.data;
        });
      } catch (error) {
        console.error('Failed to fetch stock details:', error);
      }
    }

  // Add stock to the portfolio
  async addStock(stock: Stock) {
    try {
      const newStock = await apiAddStock(stock); // API call to add stock
      runInAction(() => {
        // Check if the stock already exists in the portfolio
        const existingStock = this.portfolio.find((s) => s.symbol === newStock.symbol);
        if (existingStock) {
          existingStock.quantity += stock.quantity; // Increment quantity if exists
        } else {
          this.portfolio.push(newStock); // Add new stock to portfolio
        }
      });
    } catch (error) {
      console.error('Failed to add stock:', error);
    }
  }

  // Update stock quantity
  async updateStock(symbol: string, quantity: number) {
    try {
      await updateStock(symbol, { quantity }); // Call API to update quantity
      runInAction(() => {
        const stock = this.portfolio.find((s) => s.symbol === symbol);
        if (stock) {
          stock.quantity = quantity; // Update quantity in state
        }
      });
    } catch (error) {
      console.error('Failed to update stock quantity:', error);
    }
  }

  // Remove stock from the portfolio
  async removeStock(symbol: string) {
    try {
      await deleteStock(symbol); // API call to delete stock
      runInAction(() => {
        this.portfolio = this.portfolio.filter((s) => s.symbol !== symbol); // Remove stock from state
      });
    } catch (error) {
      console.error('Failed to remove stock:', error);
    }
  }
}

export const portfolioStore = new PortfolioStore();
