import React from 'react';

interface Props {
  title: string;
}

const SingleListItem: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <li className="block-list__item" id={title}>
      <p className="p medium-font block-list__item--title">{title}</p>
      {children}
    </li>
  );
};

export default SingleListItem;
