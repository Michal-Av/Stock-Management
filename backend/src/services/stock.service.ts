import axios from 'axios';

export async function getStockQuote(symbol: string): Promise<any> {
    const apiKey = process.env.API_KEY_FMP;
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
    const response = await axios.get(url);
    return response.data[0];
  }
