import React, { useState } from "react";

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button
        className="creatix-btn primary"
        onClick={() => setModalIsOpen(!modalIsOpen)}
        type="button"
      >
        <div className="text">Start Create</div>
      </button>
    </div>
  );
}

export default Login;
