import React from 'react';

interface Props {
  id: string;
  color: 'blue' | 'pink' | 'gray';
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<Props> = ({ color, id, title, description }) => {
  return (
    <div
      className={`cell small-12 medium-12 large-10 feature-card__padding feature-card feature-card--${color}`}
      id={id}
    >
      <h2 className="h2 feature-card__title" id={`${id}_main_text`}>
        {title}
      </h2>
      <h4 className="h4" id={`${id}_sub_text`}>
        {description}
      </h4>
    </div>
  );
};

export default FeatureCard;
