import React, { useState } from 'react';

interface Props {
  name: string;
}

const BasicInput: React.FC<Props> = (props) => {
  const { name } = props;
  const [value, setValue] = useState('');
  return (
    <div className="searchbar">
      <input
        name={name}
        className="searchbar_search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="searchbar_exit" onClick={() => setValue('')}>
        X
      </button>
    </div>
  );
};

export default BasicInput;
