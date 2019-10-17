import React from "react";
import PropTypes from "prop-types";

const Overview = ({ className }) => (
  <svg
    width="71"
    height="80"
    viewBox="0 0 71 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect y="24" width="30" height="35" fill="#0984E3" />
    <rect x="41" y="45" width="30" height="35" fill="#F64C72" />
    <rect x="41" width="30" height="35" fill="#F64C72" />
  </svg>
);

Overview.propTypes = {
  className: PropTypes.string.isRequired
};

export default Overview;
