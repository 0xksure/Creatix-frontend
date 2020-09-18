import React from "react";
import FeedbackItem from "./FeedbackItem";

interface Props {
  feedbacks: Record<string, string>;
}

const FeedbackList: React.FC<Props> = ({ feedbacks }) => {
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <ul className="feedback-list">
          {feedbacks.map((feedback) => (
            <FeedbackItem feedback={feedback} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackList;
