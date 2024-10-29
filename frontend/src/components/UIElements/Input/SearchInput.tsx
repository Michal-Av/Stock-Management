// src/ui/atoms/Input.tsx
import React, { useState } from 'react';
import './SearchInput.css';

type InputProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

const SearchInput: React.FC<InputProps> = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
    setInputValue(''); // Clear the input after search
  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='input'
      />
      <button onClick={handleSearch} className='button'>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
