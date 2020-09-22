import React from "react";
import { Feedback } from "Components/Feedback/types";

interface Props {
  feedbacks: Feedback[];
}

const NumberOfFeedback: React.FC<Props> = ({ feedbacks }) => {
  const numFeedbacks = feedbacks.length;
  return (
    <div className="grid-x">
      <div className="cell small-4">
        <div className="material-box">
          <h5>Feedbacks</h5>
          <h3 className="h3 center small padding-zero">{numFeedbacks}</h3>
        </div>
      </div>
    </div>
  );
};

export default NumberOfFeedback;
