import { IconProps } from 'Components/Icons/types';
import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  Icon: React.FC<IconProps>;
}

const CenteredFeature: React.FC<Props> = (props) => {
  const { title, subtitle, description, Icon } = props;
  return (
    <div className="cell small-12 medium-12 large-6 ">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 medium-6 large-6 creatix-card">
          <Icon className="product-icon" />
          <h2 className="h2 medium-font small-font" id="home_features_overview_main">
            {title}
          </h2>
          <h4 className="h4 medium-font small-font" id="home_features_overview_main">
            {subtitle}
          </h4>
          <p className="p" id="home_features_overview_card_text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenteredFeature;
