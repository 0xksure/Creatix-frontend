import React from 'react';
import PlusIcon from 'Components/Icons/PlusIcon';

interface Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const FloatingButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={(e) => onClick(e)}>
      <div className="floating-button__icon">
        <PlusIcon />
      </div>
    </button>
  );
};

export default FloatingButton;
