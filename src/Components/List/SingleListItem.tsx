import React from 'react';

interface Props {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const SingleListItem: React.FC<Props> = (props) => {
  const { name, onClick } = props;
  return (
    <li className="single-list__item" id={name} onClick={onClick}>
      {name}
    </li>
  );
};

export default SingleListItem;
