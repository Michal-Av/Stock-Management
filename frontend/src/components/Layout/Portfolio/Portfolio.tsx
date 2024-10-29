import React from 'react';
import SearchSection from './SearchSection';
import { portfolioStore } from '../../../redux';
import PortfolioSection from './PortfolioSection';
import './Portfolio.css'; 

const Portfolio: React.FC = () => {
  const handleAddToPortfolio = async (stock: any) => {
    try {
      const stockToAdd = {
        name: stock.name,
        symbol: stock.symbol,
        price: stock.price,
        quantity: 1, // Default quantity for now
        change: stock.change,
        changesPercentage: stock.changesPercentage,
        dayLow: stock.dayLow,
        dayHigh: stock.dayHigh,
        yearLow: stock.yearLow,
        yearHigh: stock.yearHigh,
        marketCap: stock.marketCap,
        volume: stock.volume,
        avgVolume: stock.avgVolume,
        previousClose: stock.previousClose,
        open: stock.open,
        exchange: stock.exchange,
        pe: stock.pe,
        eps: stock.eps,
        earningsAnnouncement: stock.earningsAnnouncement,
      };
      await portfolioStore.addStock(stockToAdd);
      alert(`${stock.name} has been added to your portfolio!`);
    } catch (error) {
      console.error('Error adding stock to portfolio:', error);
    }
  };

  return (
    <div className="portfolio-page-container">
      <div className="search-section">
        <SearchSection onAddToPortfolio={handleAddToPortfolio} />
      </div>
      <div className="portfolio-section">
        <PortfolioSection />
      </div>
    </div>
  );
};

export default Portfolio;
