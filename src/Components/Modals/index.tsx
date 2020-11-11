import React from 'react';

interface Props {
  isOpen: boolean;
  className?: string;
}

const Modal: React.FC<Props> = (props) => {
  const { children, isOpen, className } = props;
  if (isOpen) {
    return <div className={`modal ${className}`}>{children}</div>;
  } else {
    return null;
  }
};

export default Modal;
