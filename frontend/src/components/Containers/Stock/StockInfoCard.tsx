import React from 'react';
import TextLabel from '../../UIElements/TextLabal';
import PriceTag from '../../UIElements/PriceTag';

interface StockInfoCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
}

const StockInfoCard: React.FC<StockInfoCardProps> = ({ name, symbol, price, change }) => (
  <div className="stock-card">
    <h2>{name} ({symbol})</h2>
    <PriceTag price={price} change={change} />
    <TextLabel label="Symbol" value={symbol} />
    <TextLabel label="Price" value={`$${price.toFixed(2)}`} />
  </div>
);

export default StockInfoCard;
