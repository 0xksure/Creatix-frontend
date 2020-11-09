import React from 'react';
import FeedbackItem from './FeedbackItem';
import { Feedback } from 'Components/Feedback/types';

interface Props {
  feedbacks: Feedback[];
  onSubmit: (data: any) => void;
}

const FeedbackList: React.FC<Props> = ({ feedbacks, onSubmit }) => {
  return (
    <div className="cell margin-top-l">
      <ul className="grid-x feedback-list align-center">
        {feedbacks &&
          feedbacks.length > 0 &&
          feedbacks.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} onSubmit={onSubmit} />
          ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
