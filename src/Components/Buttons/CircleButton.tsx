import React from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  className?: string;
}

const CircleButton: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} creatix-btn circle circle--no-margin `}
      type="button"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default CircleButton;
