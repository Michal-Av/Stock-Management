import React from 'react';

interface PriceTagProps {
  price: number;
  change: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price, change }) => (
  <div style={{ color: change >= 0 ? 'green' : 'red' }}>
    <h2>${price.toFixed(2)}  {change >= 0 ? '+' : ''}{change.toFixed(2)}%</h2>
    <p></p>
  </div>
);

export default PriceTag;
