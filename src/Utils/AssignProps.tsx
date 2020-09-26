import React from "react";

interface Props {
  order: Record<string, string>;
  down: any;
  originalIndex: any;
  curIndex: any;
  y: any;
}

const AssignProps: React.StatelessComponent<Props> = ({
  order,
  down,
  originalIndex,
  curIndex,
  y,
}) => {
  return (index) => {
    const props =
      down && index === originalIndex
        ? {
            y: curIndex * 100 + y,
            scale: 1.1,
            zIndex: "1",
            shadow: 15,
            immediate: (n) => n === "y" || n === "zIndex",
          }
        : {
            y: order.indexOf(index) * 100,
            scale: 1,
            zIndex: "0",
            shadow: 0,
            immediate: false,
          };
    return props;
  };
};

export default AssignProps;
