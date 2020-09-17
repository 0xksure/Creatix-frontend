import React from 'react';

function Modal(props) {
    const { children } = props
    return (
      <div className="modal">
        {children}
      </div>
    )
}

export default Modal;