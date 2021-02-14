import React from 'react';

interface Props {
  name: string;
  placeholder: string;
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmpty: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { name, placeholder, query, onChange, onEmpty } = props;
  return (
    <div className="searchbar">
      <input
        name={name}
        placeholder={placeholder}
        className="searchbar_search"
        type="text"
        value={query}
        onChange={onChange}
      />
      <button type="button" className="searchbar_exit" onClick={onEmpty}>
        X
      </button>
    </div>
  );
};

export default SearchBar;
