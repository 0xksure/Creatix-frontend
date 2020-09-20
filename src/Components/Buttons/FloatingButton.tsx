import React from "react";

interface Props {
  action: any;
  label: any;
  icon: any;
}

const FloatingButton: React.FC = ({ action, label, icon }) => {
  return (
    <div className="floating-menu-item" onClick={() => onClick()}>
      <label>{label}</label>
      <div className="floating-menu-icon">
        <i className="material-icons">{icon}</i>
      </div>
    </div>
  );
};

export default FloatingButton;
