// 
import { Stock } from '../types/Stock';
import axios from 'axios';

const url = process.env.REACT_APP_LOCAL;

export const getStockQuote = async (symbol: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/stocks/${symbol}`);
    return response;
  } catch (error) {
    console.error('Failed to fetch stock quote:', error);
    throw error;
  }
};

export const getPortfolio = async () => {
  try {
    const response = await axios.get(`${url}/portfolio`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch portfolio:', error);
    throw error;
  }
};

export const addStock = async (stock:Stock) => {
  try {
    const response = await axios.post(`${url}/portfolio`, stock);
    return response.data;
  } catch (error) {
    console.error('Failed to add stock:', error);
    throw error;
  }
};

export const deleteStock = async (id: string) => {
  try {
    const response = await axios.delete(`${url}/portfolio/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to remove stock:', error);
    throw error;
  }
};

// API call to update stock quantity
export const updateStock = async (symbol: string,  quantity: any ) => {
  try {
    const response = await axios.put(`${url}/portfolio/${symbol}`, quantity);
    return response.data; // Return the updated stock data
  } catch (error) {
    console.error('Failed to update stock quantity:', error);
    throw error;
  }
};