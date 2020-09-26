import React from "react";

const Modal: React.FC = (props) => {
  const { children } = props;
  return <div className="modal">{children}</div>;
};

export default Modal;
