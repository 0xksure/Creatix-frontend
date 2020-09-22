import React from "react";
import { IconProps } from "Components/Icons/types";

const FeedbackStacked: React.FC<IconProps> = ({ className, height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="80" height="15" fill="#F64C72" />
    <rect y="40" width="80" height="15" fill="#F64C72" />
    <rect y="20" width="80" height="15" fill="#0984E3" />
  </svg>
);

export default FeedbackStacked;
