import React from "react";
import PropTypes from "prop-types";

function BannerText({ mainText, subText, bannerStyle, id }) {
  return (
    <div
      className={`cell small-12 medium-12 large-8 padding-vertical-l padding-horizontal-l ${bannerStyle}`}
    >
      <h2 className="h2" id={`${id}_main_text`}>
        {mainText}
      </h2>
      <h4 className="h4" id={`${id}_sub_text`}>
        {subText}
      </h4>
    </div>
  );
}

BannerText.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  bannerStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

function Banner({ bannerStyle, id, leftPos, mainText, subText, element }) {
  return (
    <div className="grid-x fat-banner margin-bottom-l" id={id}>
      {leftPos && (
        <BannerText
          mainText={mainText}
          subText={subText}
          bannerStyle={bannerStyle}
          id={id}
        />
      )}
      <div className="cell small-12 medium-12 large-4 vertical-padding-s">
        {element}
      </div>
      {!leftPos && (
        <BannerText
          mainText={mainText}
          subText={subText}
          bannerStyle={bannerStyle}
          id={id}
        />
      )}
    </div>
  );
}

Banner.defaultProps = {
  bannerStyle: "",
  element: null,
  leftPos: true
};

Banner.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  bannerStyle: PropTypes.string,
  id: PropTypes.string.isRequired,
  leftPos: PropTypes.bool,
  element: PropTypes.element
};

export default Banner;
