// src/routes/portfolioRoutes.ts
import express from 'express';
import { validateCreatePortfolio, validateDeletePortfolio, validateUpdatePortfolio } from '../validations/portfolio.validation';
import validateResource from '../middleware/validateResource';

import { getPortfolio, createStock, deleteStock, updateStock } from '../controllers/portfolio.controller';

const router = express.Router();

router.get('/', getPortfolio);
router.post('/', validateResource(validateCreatePortfolio), createStock);
router.put('/:symbol', updateStock);
router.delete('/:symbol',validateResource(validateDeletePortfolio), deleteStock);

export default router;
