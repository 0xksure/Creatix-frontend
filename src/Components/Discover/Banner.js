import React from "react";
import PropTypes from "prop-types";

function Banner({ bannerStyle, id, cellPosition, mainText, subText, element }) {
  return (
    <div className={`grid-x fat-banner ${bannerStyle}`} id={id}>
      <div className={`cell small-12 medium-12 large-6 ${cellPosition} `}>
        <h3 className="h3">{mainText}</h3>
        <p className="p">{subText}</p>
      </div>
      <div className="cell small-12 medium-12 large-6">{element}</div>
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
  id: PropTypes.number.isRequired,
  cellPosition: PropTypes.string,
  element: PropTypes.element
};

export default Banner;
