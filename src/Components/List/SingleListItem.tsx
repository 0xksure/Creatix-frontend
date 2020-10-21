import React from 'react';

interface Props {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SingleListItem: React.FC<Props> = (props) => {
  const { name, onClick } = props;
  return (
    <li className="single-list__item" id={name}>
      <button onClick={onClick}>{name}</button>
    </li>
  );
};

export default SingleListItem;
