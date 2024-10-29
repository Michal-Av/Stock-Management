// src/ui/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import StockDetailsPage from './StockDetailsPage';


const App: React.FC = () => (
    <Routes >
      <Route path="/" element={<PortfolioPage/>} />
      <Route path="/stocks/:symbol" element={<StockDetailsPage/>} />
    </Routes >
);

export default App;
