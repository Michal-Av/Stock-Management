const request = require('supertest');
const app = require('../server'); // Assume your express app is exported from app.js

describe('Portfolio API', () => {
  it('should fetch all stocks in portfolio', async () => {
    const res = await request(app).get('/portfolio');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should add a new stock to the portfolio', async () => {
    const newStock = {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 150,
      quantity: 1,
    };
    const res = await request(app).post('/portfolio').send(newStock);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('symbol', 'AAPL');
  });

  it('should return 404 for non-existent stock', async () => {
    const res = await request(app).get('/portfolio/invalid');
    expect(res.statusCode).toEqual(404);
  });
});
