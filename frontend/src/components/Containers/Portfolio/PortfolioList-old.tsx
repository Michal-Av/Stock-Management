import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { portfolioStore } from '../../../redux';
import { Stock } from '../../../types/Stock';
// import '../../styles/PortfolioList.css'; // CSS for styling


const PortfolioList: React.FC = observer(() => {
  useEffect(() => {
    portfolioStore.fetchPortfolio(); // Fetch portfolio on mount
  }, []);

  return (
    <div className="portfolio-list-container">
      <h1>Your Stock Portfolio</h1>
      <ul>
        {portfolioStore.portfolio.map((stock: Stock) => (
          <li key={stock.symbol}>
            <strong>{stock.name}</strong> ({stock.symbol}) - ${stock.price}
            <p>
              Change: {stock.change.toFixed(2)} ({stock.changesPercentage.toFixed(2)}%)
            </p>
            <p>Quantity: {stock.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PortfolioList;
