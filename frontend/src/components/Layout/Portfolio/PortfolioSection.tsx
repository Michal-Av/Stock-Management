import React from 'react';
import PortfolioOverview from '../../Containers/Portfolio/PortfolioOverview';
import PortfolioHoldings from '../../Containers/Portfolio/PortfolioTable';
import './PortfolioSection.css'


const PortfolioSection: React.FC = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-overview-section">
        <PortfolioOverview
          totalValue={120000}
          cashHoldings={1000}
          dayChange={-1000}
          unrealizedGainLoss={-20000}
          realizedGainLoss={2000}
        />
      </div>
      <div className="portfolio-graph-section">
     
      </div>
      <div className="portfolio-holdings-section">
        <PortfolioHoldings />
      </div>

      <div className="portfolio-banner-section">
        <img
          src={`${process.env.PUBLIC_URL}/BANNER2.webp`}
          alt="Portfolio Banner"
          className="portfolio-banner"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
