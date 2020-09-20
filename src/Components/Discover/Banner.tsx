import React from "react";
import BannerText from "Components/Discover/BannerText";

interface Props {
  id: string;
  bannerStyle: string;
  leftPos?: boolean;
  mainText: string;
  subText: string;
  element?: String;
}

const Banner: React.FC<Props> = ({
  bannerStyle,
  id,
  leftPos,
  mainText,
  subText,
  element,
}) => {
  return (
    <div className="grid-x fat-banner margin-bottom-l" id={id}>
      {leftPos && (
        <BannerText
          title={mainText}
          description={subText}
          bannerStyle={bannerStyle}
          id={id}
        />
      )}
      <div className="cell small-12 medium-12 large-4 vertical-padding-s">
        {element}
      </div>
      {!leftPos && (
        <BannerText
          title={mainText}
          description={subText}
          bannerStyle={bannerStyle}
          id={id}
        />
      )}
    </div>
  );
};

export default Banner;
