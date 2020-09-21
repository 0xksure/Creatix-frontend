import React from "react";
import Plus from "../Icons/Plus";

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
