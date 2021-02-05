import React from 'react';

interface props {
  label: string;
  symbol: string;
}
const Emoji: React.FC<props> = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
);
export default Emoji;
