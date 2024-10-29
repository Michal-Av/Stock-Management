// StockListItem.tsx

import React from 'react';
import Button from '../../UIElements/Button';
import './StockListItem.css';

type StockItemProps = {
  stockSymbol: string;
  quantity: number;
  onRemove: () => void;
};

const StockListItem: React.FC<StockItemProps> = ({ stockSymbol, quantity, onRemove }) => (
  <li className='listItem'>
    <span>
      {stockSymbol} - {quantity}
    </span>
    <Button onClick={onRemove}>Remove</Button>
  </li>
);

export default StockListItem;
