import React from 'react';

interface Props {
  height?: string;
  width?: string;
}

const Home: React.FC<Props> = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 96 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="16" y="36" width="65" height="52" fill="#0984E3" />
    <path d="M48 0L89.5692 36.75H6.43078L48 0Z" fill="#F64C72" />
  </svg>
);

export default Home;
