// src/routes/portfolioRoutes.ts
import express from 'express';
import { getStock } from '../controllers/stock.controller';
import { validateStockSymbol } from '../validations/stock.validator';
import validateResource from '../middleware/validateResource';


const router = express.Router();

router.get('/:symbol', getStock);

export default router;
