import React from 'react';

interface Props {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SelectedBox: React.FC<Props> = (props) => {
  const { name, onClick } = props;
  return (
    <div className="selected-box">
      <button className="selected-box__X" onClick={onClick}>
        Remove
      </button>
      <div className="selected-box__name">{name}</div>
    </div>
  );
};

export default SelectedBox;
