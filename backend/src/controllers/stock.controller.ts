import { Request, Response } from 'express';
import { getStockQuote } from '../services/stock.service';


export const getStock = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const stock = await getStockQuote(symbol);

    if (stock) {
      res.status(200).json(stock);
    } else {
      res.status(404).json({ message: 'Stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stock quote', error });
  }
};
