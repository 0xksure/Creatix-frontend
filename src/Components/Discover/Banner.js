import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Banner(props) {
  return (
    <div className={`grid-x fat-banner ${props.bannerStyle}`} id={props.id}>
      <div className={`cell small-12 medium-12 large-6 ${props.cellPosition} `}>
        <h3 className="h3">{props.mainText}</h3>
        <p className="p">{props.subText}</p>
      </div>
      <div className="cell small-12 medium-12 large-6">{props.element}</div>
    </div>
  );
}

Banner.defaultProps = {
  bannerStyle: "",
  cellPosition: "left",
  element: null
};

Banner.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  bannerStyle: PropTypes.string,
  cellPosition: PropTypes.string,
  element: PropTypes.object
};

export default Banner;
