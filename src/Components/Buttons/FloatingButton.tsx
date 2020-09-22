import React from "react";

interface Icon {}

interface Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  label: string;
  icon: React.FunctionComponentElement<Icon>;
}

const FloatingButton: React.FC<Props> = ({ onClick, label, icon }) => {
  return (
    <div className="floating-menu-item" onClick={(e) => onClick(e)}>
      <label>{label}</label>
      <div className="floating-menu-icon">
        <i className="material-icons">{icon}</i>
      </div>
    </div>
  );
};

export default FloatingButton;
