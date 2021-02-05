import React from 'react';

interface Props {
  height: string;
  width: string;
}

const UnionIcon: React.FC<Props> = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.875 15C23.875 19.913 20.2569 23.875 15.8182 23.875C11.3795 23.875 7.76135 19.913 7.76135 15C7.76135 10.087 11.3795 6.125 15.8182 6.125C20.2569 6.125 23.875 10.087 23.875 15Z"
      fill="#EB5757"
      stroke="#BDBDBD"
      strokeWidth="0.25"
    />
    <path
      d="M16.2386 9C16.2386 13.913 12.6205 17.875 8.18182 17.875C3.7431 17.875 0.125 13.913 0.125 9C0.125 4.08699 3.7431 0.125 8.18182 0.125C12.6205 0.125 16.2386 4.08699 16.2386 9Z"
      fill="#2F80ED"
      stroke="#BDBDBD"
      strokeWidth="0.25"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.18181 18C12.7005 18 16.3636 13.9706 16.3636 9C16.3636 7.94825 16.1996 6.93864 15.8982 6.00042C15.8716 6.00014 15.8449 6 15.8182 6C11.2995 6 7.63635 10.0294 7.63635 15C7.63635 16.0517 7.80036 17.0614 8.10178 17.9996C8.12843 17.9999 8.1551 18 8.18181 18Z"
      fill="#9B51E0"
    />
  </svg>
);

export default UnionIcon;
