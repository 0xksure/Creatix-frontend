import React from 'react';

const SingleList: React.FC = (props) => {
  const { children } = props;
  return <ul className="single-list">{React.Children.map(children, (child) => child)}</ul>;
};

export default SingleList;
