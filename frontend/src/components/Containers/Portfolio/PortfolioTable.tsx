import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom'; 
import { portfolioStore } from '../../../redux';
import { Stock } from '../../../types/Stock';
import { DeleteOutlined, PlusOutlined, MinusOutlined,EyeOutlined } from '@ant-design/icons';
import './PortfolioTable.css'; // CSS for styling

const PortfolioHoldings: React.FC = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    portfolioStore.fetchPortfolio(); // Fetch portfolio on mount
  }, []);

  const handleRemoveStock = (symbol: string) => {
    portfolioStore.removeStock(symbol); // Call the remove stock function
  };

  const handleIncreaseQuantity = (stock: Stock) => {
     portfolioStore.updateStock(stock.symbol, stock.quantity + 1); // Increment quantity
  };

  const handleDecreaseQuantity = (stock: Stock) => {
    if (stock.quantity > 1) {
     portfolioStore.updateStock(stock.symbol, stock.quantity - 1); // Decrement quantity
    }
  };

  const handleViewDetails = (symbol: string) => {
    navigate(`/stocks/${symbol}`); // Navigate to the stock details page
  };

  return (
    <div className="holdings-table">
      <h4>My Portfolios</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbols</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Day Change</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {portfolioStore.portfolio.map((stock: Stock) => (
            <tr key={stock.symbol}>
              <td className='title-action' onClick={() => handleViewDetails(stock.symbol)}>{stock.name}</td>
              <td>{stock.symbol}</td>
              <td>
                <div className="quantity-controls">
                  <MinusOutlined
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(stock)}
                  />
                  <span>{stock.quantity}</span>
                  <PlusOutlined
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(stock)}
                  />
                </div>
              </td>
              <td>${stock.price.toFixed(2)}</td>
              <td className={stock.change >= 0 ? 'positive' : 'negative'}>
                {stock.change.toFixed(2)} ({stock.changesPercentage.toFixed(2)}%)
              </td>
              <td className="action-buttons">
                <EyeOutlined
                    className="view-button"
                    onClick={() => handleViewDetails(stock.symbol)}
                  />
                <DeleteOutlined
                  className="delete-button"
                  onClick={() => handleRemoveStock(stock.symbol)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default PortfolioHoldings;
