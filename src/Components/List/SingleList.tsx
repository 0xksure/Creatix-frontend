import React from 'react';
import SingleListItem from 'Components/List/SingleListItem';

const SingleList: React.FC<Props> = (props) => {
  const { children } = props;
  return <ul>{React.Children.map(children, (child) => child)}</ul>;
};

export default SingleList;
