// src/components/StockStatisticsTable.tsx
import React from 'react';
import { Stock } from '../../../types/Stock'; // Import the Stock type

interface StockStatisticsTableProps {
  stock: Stock; // Define the stock prop
}

const StockStatisticsTable: React.FC<StockStatisticsTableProps> = ({ stock }) => {
  const statistics = [
    { label: 'Previous Close', value: stock.previousClose },
    { label: 'Open', value: stock.open },
    { label: 'Day\'s Range', value: `${stock.dayLow} - ${stock.dayHigh}` },
    { label: '52 Week Range', value: `${stock.yearLow} - ${stock.yearHigh}` },
    { label: 'Volume', value: stock.volume },
    { label: 'Market Cap', value: stock.marketCap },
  ];

  return (
    <table className="statistics-table">
      <tbody>
        {statistics.map((stat, index) => (
          <tr key={index}>
            <td><strong>{stat.label}</strong></td>
            <td>{stat.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockStatisticsTable;
