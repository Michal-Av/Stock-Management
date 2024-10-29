// src/components/Containers/Stock/StockCard.tsx
import React from 'react';
import './StockCard.css'; // CSS for styling
import { Stock } from '../../../types/Stock';
import Button from '../../UIElements/Button';

interface StockCardProps {
  stock: Stock;
  onAddToPortfolio?: (stock: Stock) => void; // Optional callback
  showAddButton?: boolean; // Control whether the button is shown
}

const StockCard: React.FC<StockCardProps> = ({ 
  stock, 
  onAddToPortfolio, 
  showAddButton = false // Default is false if not provided
}) => (
  <div className="card">
    <h2 className="title">{stock.name}</h2>
    <p><strong>Symbol:</strong> {stock.symbol}</p>
    <p><strong>Price:</strong> ${stock.price}</p>
    <p><strong>Change:</strong> {stock.changesPercentage}%</p>

    {showAddButton && onAddToPortfolio && (
      <button className='button' onClick={() => onAddToPortfolio(stock)} >
        Add to My Portfolio
      </button>
    )}
  </div>
);

export default StockCard;
