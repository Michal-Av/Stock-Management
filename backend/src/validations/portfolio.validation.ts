import { symbol } from "joi";

const Joi = require('joi');

// Validator for creating a portfolio entry
export const validateCreatePortfolio = Joi.object({
  body: Joi.object({
    symbol: Joi.string().required().error(new Error('Stock symbol is required')),
    name: Joi.string().required().error(new Error('Stock name is required')),
    price: Joi.number().min(0).required().error(new Error('Price must be a positive number')),
    quantity: Joi.number().integer().min(1).required().error(new Error('Quantity must be a positive integer')),
    change: Joi.number().optional(),
    changesPercentage: Joi.number().optional(),
    dayLow: Joi.number().optional(),
    dayHigh: Joi.number().optional(),
    yearLow: Joi.number().optional(),
    yearHigh: Joi.number().optional(),
    marketCap: Joi.number().optional(),
    volume: Joi.number().integer().optional(),
    avgVolume: Joi.number().integer().optional(),
    previousClose: Joi.number().optional(),
    open: Joi.number().optional(),
    exchange: Joi.string().required().error(new Error('Exchange is required')),
    pe: Joi.number().optional().allow(null), // Allow null for pe
    eps: Joi.number().optional().allow(null), // Allow null for eps
    earningsAnnouncement: Joi.date().optional().allow(null), // Allow null for date
    purchaseDate: Joi.date().optional().allow(null),
  }),
  params: Joi.object(),
  query: Joi.object(),
});

// Validator for deleting a portfolio entry
export const validateDeletePortfolio = Joi.object({
  params: Joi.object({
    symbol: Joi.string().required().error(new Error('Portfolio symbol is required')),
  }),
  body: Joi.object(),
  query: Joi.object(),
});

// Validator for updating a portfolio entry
export const validateUpdatePortfolio = Joi.object({
  params: Joi.object({
    symbol: Joi.string().required().error(new Error('Portfolio symbol is required')),
  }),
  body: Joi.object({
    symbol: Joi.string().optional(),
    name: Joi.string().optional(),
    price: Joi.number().min(0).optional(),
    quantity: Joi.number().integer().min(1).optional(),
    change: Joi.number().optional(),
    changesPercentage: Joi.number().optional(),
    dayLow: Joi.number().optional(),
    dayHigh: Joi.number().optional(),
    yearLow: Joi.number().optional(),
    yearHigh: Joi.number().optional(),
    marketCap: Joi.number().optional(),
    volume: Joi.number().integer().optional(),
    avgVolume: Joi.number().integer().optional(),
    previousClose: Joi.number().optional(),
    open: Joi.number().optional(),
    exchange: Joi.string().optional(),
    pe: Joi.number().optional(),
    eps: Joi.number().optional(),
    earningsAnnouncement: Joi.date().optional(),
    purchaseDate: Joi.date().optional(),
  }).min(1), // Ensure at least one field is being updated
  query: Joi.object(),
});
