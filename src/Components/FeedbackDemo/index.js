import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import ListFeedback from "./ListFeedback";
import SubmitFeedback from "./SubmitFeedback";
import { fetchFeedback } from "../../Actions/FeedbackDemo";

function FeedbackDemo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeedback());
  }, []);
  const feedbackList = useSelector(
    state => state.FeedbackDemo.feedbackList,
    shallowEqual
  );

  return (
    <div className="grid-x">
      <div className="cell small-12 feedback-display">
        <ListFeedback feedbackList={feedbackList} />
      </div>
      <div className="cell small-12">
        <SubmitFeedback />
      </div>
    </div>
  );
}

FeedbackDemo.propTypes = {};

export default FeedbackDemo;
