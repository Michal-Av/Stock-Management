import React from 'react';
import './PortfolioOverview.css'; // CSS for styling

interface PortfolioOverviewProps {
  totalValue: number;
  cashHoldings: number;
  dayChange: number;
  unrealizedGainLoss: number;
  realizedGainLoss: number;
}

const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({
  totalValue,
  cashHoldings,
  dayChange,
  unrealizedGainLoss,
  realizedGainLoss,
}) => (
<div>

  {/* Hard coded random values
    * TODO: use data to calculate correct values and disply it
  ***/}
<h1 className='title-overview'>Hi Avi, wellcome back!</h1>
  <div className="portfolio-overview">
    <h2>${totalValue.toFixed(2)} </h2>
    <div className="overview-stats">
      <p>Cash Holdings: ${cashHoldings.toFixed(2)}</p>
      <p>Day Change: <span className={dayChange >= 0 ? 'positive' : 'negative'}>
        ${dayChange.toFixed(2)}
      </span></p>
      <p>Unrealized Gain/Loss: <span className={unrealizedGainLoss >= 0 ? 'positive' : 'negative'}>
        ${unrealizedGainLoss.toFixed(2)}
      </span></p>
      <p>Realized Gain/Loss: <span className={realizedGainLoss >= 0 ? 'positive' : 'negative'}>
        ${realizedGainLoss.toFixed(2)}
      </span></p>
    </div>
  </div>
</div>
);

export default PortfolioOverview;
