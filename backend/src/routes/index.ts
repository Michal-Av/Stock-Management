// routes/index.ts
import express, { Request, Response, NextFunction } from 'express';
import portfolioRoutes from './portfolio.routes';
import stockRoutes from './stock.routes';

const router = express.Router();


router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));

router.use('/portfolio', portfolioRoutes);
router.use('/stocks', stockRoutes);

export default router;
