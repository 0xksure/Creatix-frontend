import React from "react";
import Plus from "../Icons/Plus";
import FloatingButton from "Components/Buttons/FloatingButton";

interface Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const FloatingMaterial: React.FC<Props> = ({ onClick }) => {
  const className = "floating-menu";
  return (
    <div className="container">
      <div className={className}>
        <FloatingButton
          onClick={onClick}
          label="item 1"
          icon={<Plus />}
          key="m"
        />
      </div>
    </div>
  );
};

export default FloatingMaterial;
