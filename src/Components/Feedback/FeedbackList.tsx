import React from 'react';
import FeedbackItem from './FeedbackItem';
import { Feedback } from 'Components/Feedback/types';

interface Props {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<Props> = ({ feedbacks }) => {
  console.log('feedback ', feedbacks);
  return (
    <div className="cell margin-top-l">
      <ul className="grid-x feedback-list align-center">
        {feedbacks &&
          feedbacks.length > 0 &&
          feedbacks.map((feedback) => <FeedbackItem key={feedback.id} feedback={feedback} />)}
      </ul>
    </div>
  );
};

export default FeedbackList;
