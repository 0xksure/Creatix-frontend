import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Validation({ children }) {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  return (
    <div>
      {isAuthenticated && <div>{children}</div>}
      {!isAuthenticated && <div>You are not logged in</div>}
    </div>
  );
}

Validation.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Validation;
