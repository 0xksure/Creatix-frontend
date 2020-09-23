import React from "react";
import { IconProps } from "Components/Icons/types";

const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="80" height="21.8182" fill="#F64C72" />
    <rect y="58.1818" width="80" height="21.8182" fill="#F64C72" />
    <rect y="29.0909" width="80" height="21.8182" fill="#0984E3" />
  </svg>
);

export default LogoIcon;
