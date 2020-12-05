import React from 'react';

interface Props {
  height: string;
  width: string;
}

const Discover: React.FC<Props> = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 113 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="30" cy="31" rx="30" ry="31" fill="#C4C4C4" />
    <rect
      x="52.516"
      y="42"
      width="72"
      height="10.0618"
      rx="5.03088"
      transform="rotate(33.2444 52.516 42)"
      fill="#F64C72"
    />
    <ellipse cx="30" cy="31" rx="30" ry="31" fill="#F64C72" />
    <ellipse cx="30" cy="31" rx="25" ry="26" fill="#1793ED" />
  </svg>
);

export default Discover;
