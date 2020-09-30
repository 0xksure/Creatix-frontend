import React from 'react';
import BannerText from 'Components/Discover/BannerText';

interface Props {
  id: string;
  bannerStyle: string;
  leftPos?: boolean;
  mainText: string;
  subText: string;
}

const Banner: React.FC<Props> = ({ bannerStyle, id, leftPos, mainText, subText }) => {
  return (
    <div className="grid-x margin-bottom-l" id={id}>
      {leftPos && (
        <BannerText title={mainText} description={subText} bannerStyle={bannerStyle} id={id} />
      )}
      {!leftPos && (
        <BannerText title={mainText} description={subText} bannerStyle={bannerStyle} id={id} />
      )}
    </div>
  );
};

export default Banner;
