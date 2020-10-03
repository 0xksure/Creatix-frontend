import React, { useState } from 'react';

interface Props {
  query: string;
  onChange: (event: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { query, onChange } = props;
  return (
    <div className="searchbar">
      <input
        className="searchbar_search"
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="searchbar_exit" onClick={() => onChange('')}>
        X
      </button>
    </div>
  );
};

export default SearchBar;
