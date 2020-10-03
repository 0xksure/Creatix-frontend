import React from 'react';

interface Props {
  name: string;
}

const SingleListItem: React.FC<Props> = (props) => {
  const { name } = props;
  return <li>{name}</li>;
};

export default SingleListItem;
