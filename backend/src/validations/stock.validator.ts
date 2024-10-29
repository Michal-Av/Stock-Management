const Joi = require('joi');

// Validate stock symbol from route params
export const validateStockSymbol = Joi.object({
  symbol: Joi.string().alphanum().min(1).max(10).required()
    .error(new Error('Stock symbol is required and must be alphanumeric')),
});
