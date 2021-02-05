import React from 'react';

interface Props {
  id: string;
  color: 'blue' | 'pink' | 'gray';
  title: string;
  description: React.ReactNode;
  Icon: React.ReactNode;
}

const FeatureCard: React.FC<Props> = ({ color, id, title, description, children }) => {
  return (
    <div
      className={`cell small-12 medium-12 large-10 feature-card__padding feature-card feature-card--${color}`}
      id={id}
    >
      <div className="grid-x align-center">
        <div className="cell small-12 medium-10 ">
          <h2 className="h2 feature-card__title" id={`${id}_main_text`}>
            {title}
          </h2>
          <h4 className="h4" id={`${id}_sub_text`}>
            {description}
          </h4>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
