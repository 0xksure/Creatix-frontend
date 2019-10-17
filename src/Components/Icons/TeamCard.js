import React from "react";
import PropTypes from "prop-types";

const TeamCard = ({ className }) => (
  <svg
    width="64"
    height="80"
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="64" height="80" fill="#0984E3" />
    <rect width="64" height="40" fill="#F64C72" />
  </svg>
);

TeamCard.propTypes = {
  className: PropTypes.string.isRequired
};

export default TeamCard;
