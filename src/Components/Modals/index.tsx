import React from 'react';

interface Props {
  isOpen: boolean;
}

const Modal: React.FC<Props> = (props) => {
  const { children, isOpen } = props;
  if (isOpen) {
    return <div className="modal">{children}</div>;
  } else {
    return null;
  }
};

export default Modal;
