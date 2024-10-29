// src/controllers/portfolioController.ts
import { Request, Response } from 'express';
import {
    createStockUC,
    getPortfolioUC,
    deleteStockUC,
    updateStockUC
  } from '../services/portfolio.service';

export const getPortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await getPortfolioUC();
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio', error });
  }
};

export const createStock = async (req: Request, res: Response) => {
  try {
    const stock = await createStockUC(req.body);
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: 'Error adding stock', error });
  }
};

export const deleteStock = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const result = await deleteStockUC({ symbol });
    if (result) {
      res.status(200).json({ message: 'Stock removed successfully' });
    } else {
      res.status(404).json({ message: 'Stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing stock', error });
  }
};

export const updateStock = async (req: Request, res: Response,) => {
  const { symbol } = req.params; // Extract symbol from params
  const { quantity } = req.body; // Extract quantity from request body

  try {
    const updatedStock = await updateStockUC({symbol}, quantity);

    if (!updatedStock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    res.status(200).json(updatedStock);
  } catch (error) {
    console.error('Error updating stock:', error);
    res.status(500).json({ message: 'Failed to update stock' });
  }
};