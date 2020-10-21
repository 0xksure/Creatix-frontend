import React, { useState } from 'react';
import { Field } from 'formik';

interface Props {
  name: string;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const BasicInput: React.FC<Props> = (props) => {
  const { name, onChange } = props;
  const [value, setValue] = useState('');
  return (
    <div className="searchbar">
      <Field
        name={name}
        className="searchbar_search"
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e);
          setValue(e.target.value);
        }}
      />
      <button className="searchbar_exit" onClick={() => setValue('')}>
        X
      </button>
    </div>
  );
};

export default BasicInput;
