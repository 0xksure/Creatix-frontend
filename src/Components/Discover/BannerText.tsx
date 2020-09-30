import React from 'react';

interface BannerTextProps {
  title: string;
  description: string;
  bannerStyle: string;
  id: string;
}

const BannerText: React.FC<BannerTextProps> = ({ title, description, bannerStyle, id }) => {
  return (
    <div
      className={`cell small-12 medium-12 large-12 padding-vertical-l padding-horizontal-l ${bannerStyle}`}
    >
      <h2 className="h2 uppercase" id={`${id}_main_text`}>
        {title}
      </h2>
      <h3 className="h3" id={`${id}_sub_text`}>
        {description}
      </h3>
    </div>
  );
};

export default BannerText;
