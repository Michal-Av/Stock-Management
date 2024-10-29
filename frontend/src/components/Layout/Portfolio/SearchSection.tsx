import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import Input from '../../UIElements/Input/SearchInput';
import { getStockQuote } from '../../../services/api-stock';
import StockCard from '../../Containers/Stock/StockCard'; // Assuming you have a StockCard component
import { Stock } from '../../../types/Stock';
import './SearchSection.css'

const SearchSection: React.FC<{ onAddToPortfolio: (stock: Stock) => void }> = ({ onAddToPortfolio }) => {
  const [searchResult, setSearchResult] = useState<Stock | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSearch = async (symbol: string) => {
    setSearchResult(null); // Clear previous search result
    setLoading(true); // Set loading to true while fetching

    try {
      const resp: AxiosResponse<Stock> = await getStockQuote(symbol);
      setSearchResult(resp.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    } finally {
      setLoading(false); // Stop loading after the request completes
    }
  };

  return (
    <div className="search-stocks-container">
      <Input placeholder="Enter stock symbol" onSearch={handleSearch} />
      {loading ? (
        <p className='massage-search'>Loading...</p>
      ) : searchResult ? (
        <div className="stock-card-container">
          <StockCard
            stock={searchResult}
            onAddToPortfolio={onAddToPortfolio}
            showAddButton={true}
          />
        </div>
      ) : (
        <div><p className='massage-search'>No stock with this symbol was found.</p></div>
      )}
    </div>
  );
};

export default SearchSection;
