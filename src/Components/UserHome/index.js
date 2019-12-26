import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function NumberOfFeedback({ feedbacks }) {
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
}

function UserHome() {
  const auth = useSelector(state => state.Auth);
  const feedback = useSelector(state => state.Feedback);
  const dispatch = useDispatch();

  return (
    <div className="grid-x">
      <div className="cell-12">
        <h2>{`Good morning ${auth.firstname + " " + auth.lastname}`}</h2>
      </div>
      <div className="cell small-12">
        <NumberOfFeedback feedbacks={feedback.feedbacks} />
      </div>
    </div>
  );
}

export default UserHome;
