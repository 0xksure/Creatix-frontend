import React from "react";

interface Props {}

const Modal: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="modal">{children}</div>;
};

export default Modal;
