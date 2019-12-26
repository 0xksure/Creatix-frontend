import React from "react";
import Plus from "../Icons/Plus";

function FloatingButton({ action, label, icon }) {
  return (
    <div className="floating-menu-item" onClick={() => onClick()}>
      <label>{label}</label>
      <div className="floating-menu-icon">
        <i className="material-icons">{icon}</i>
      </div>
    </div>
  );
}

function FloatingMaterial({ onClick }) {
  const className = "floating-menu";
  return (
    <div className="container">
      <div className={className}>
        <FloatingButton
          action={onClick}
          label="item 1"
          icon={<Plus />}
          key="m"
        />
      </div>
    </div>
  );
}

export default FloatingMaterial;
