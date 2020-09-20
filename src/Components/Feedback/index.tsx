import React from "react";
import { useSelector } from "react-redux";

import SearchFeedback from "./SearchFeedback";
import FeedbackList from "./FeedbackList";
import FeedbackModal from "./Modal";

function Feedback() {
  const feedback = useSelector((state) => state.Feedback);
  return (
    <div className="grid-x">
      <SearchFeedback />
      <FeedbackList feedbacks={feedback.feedbacks} />
      <FeedbackModal feedback={feedback.feedbacks} />
    </div>
  );
}

export default Feedback;
