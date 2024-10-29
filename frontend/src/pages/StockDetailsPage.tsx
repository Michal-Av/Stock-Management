// src/ui/pages/StockDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStockQuote } from '../services/api-stock';
import StockStatisticsTable from '../components/Layout/Stocks/StockStatisticsTable';
import { Stock } from '../types/Stock';
import '../styles/StockDetailsPage.css'
import PriceTag from '../components/UIElements/PriceTag';

const StockDetailsPage: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [stock, setStock] = useState<Stock | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStock = async () => {
      if (symbol) {
        try {
          const { data } = await getStockQuote(symbol); // Fetch stock details
          setStock(data); // Store in state
        } catch (error) {
          console.error('Error fetching stock details:', error);
        }
      }
    };

    fetchStock();
  }, [symbol]);

  if (!stock) return <p>Loading stock data...</p>;

  return (
    <div>
      <button className="back-button" onClick={() => navigate('/')}> ◀ My Portfolio </button>
      <h1>{stock.name} ({stock.symbol})</h1>
      <PriceTag price={stock.price} change={stock.change} />
      <StockStatisticsTable stock={stock} /> {/* Pass stock as a prop */}
    </div>
  );
};

export default StockDetailsPage;
