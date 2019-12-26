import React from "react";
import { useSelector } from "react-redux";

function Validation({ children }) {
  const isAuthenticated = useSelector(state => state.Auth.isAuthenticated);
  return (
    <div>
      {isAuthenticated && <div>{children}</div>}
      {!isAuthenticated && <div>You are not logged in</div>}
    </div>
  );
}

export default Validation;
