import React from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  label: string;
  icon: Element;
}

const FloatingButton: React.FC<Props> = ({ onClick, label, icon }) => {
  return (
    <button className="floating-menu-item" onClick={(e) => onClick(e)}>
      <label>{label}</label>
      <div className="floating-menu-icon">
        <i className="material-icons">{icon}</i>
      </div>
    </button>
  );
};

export default FloatingButton;
