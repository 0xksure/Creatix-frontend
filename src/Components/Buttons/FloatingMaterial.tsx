import React from "react";
import PlusIcon from "../Icons/PlusIcon";
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
          icon={<PlusIcon className="" />}
          key="m"
        />
      </div>
    </div>
  );
};

export default FloatingMaterial;
