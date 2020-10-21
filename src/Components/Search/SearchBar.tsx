import React from 'react';

interface Props {
  name: string;
  placeholder: string;
  query: string;
  onChange: (event: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { name, placeholder, query, onChange } = props;
  return (
    <div className="searchbar">
      <input
        name={name}
        placeholder={placeholder}
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
