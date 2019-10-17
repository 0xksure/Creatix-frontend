import React from "react";
import PropTypes from "prop-types";

const FeedbackStacked = ({ className }) => (
  <svg
    width="85"
    height="55"
    viewBox="0 0 80 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="80" height="15" fill="#F64C72" />
    <rect y="40" width="80" height="15" fill="#F64C72" />
    <rect y="20" width="80" height="15" fill="#0984E3" />
  </svg>
);

FeedbackStacked.propTypes = {
  className: PropTypes.string.isRequired
};

export default FeedbackStacked;
