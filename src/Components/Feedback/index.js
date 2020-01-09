import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Clap, ClapAnimation } from "../Animations/Clap";
import FloatingMaterial from "../Buttons/FloatingMaterial";
import { clapFeedback } from "../../Actions/Feedback";
import { StaticRouter } from "react-router";

function beautifulDiffDate(date1, date2) {
  const diffTime = Math.abs(date1 - date2);
  const diffSeconds = diffTime / 1000;
  if (diffDays < 60) {
    return `${Math.ceil(diffSeconds)}s ago`;
  }
  const diffMinutes = diffSeconds / 60;
  if (diffMinutes < 60) {
    return `${Math.ceil(diffMinutes)} mins ago`;
  }
  const diffHours = diffMinutes / 60;
  if (diffHours < 24) {
    return `${Math.ceil(diffHours)} hrs ago`;
  }
  const diffDays = diffHours / 24;
  return `${Math.ceil(diffDays)} days ago`;
}

function FeedbackItem({ feedback }) {
  const userID = useSelector(state => state.Auth.UserID);
  const dispatch = useDispatch();
  const numberOfClaps = feedback.Claps.length;
  const createdDate = beautifulDiffDate(
    new Date(),
    new Date(feedback.CreatedAt)
  );

  const userHasClapped = feedback.Claps.some(clap => clap.UserId == userID);
  return (
    <li key={feedback.ID} className="feedback-item">
      <div className="grid-x grid-margin-x">
        <div className="cell small-2">
          <p>Some user</p>
        </div>
        <div className="cell small-10">
          <div className="grid-x">
            <div className="cell small-12">
              <div className="grid-x grid-margin-x">
                <div className="cell shrink">
                  <p className="p margin-zero bold-font blue-on-pink">
                    {`${feedback.User.Firstname} ${feedback.User.Lastname}`}
                  </p>
                </div>
                <div className="cell auto">
                  <p className="p margin-zero blue-on-pink"> {createdDate}</p>
                </div>
              </div>
            </div>
            <div className="cell small-12">
              <p className="p bold-font medium margin-bottom-s">
                {feedback.Title}
              </p>
            </div>
            <div className="cell small-10">
              <p className="p margin-zero">{feedback.Description}</p>
            </div>
            <div className="cell small-2">
              <div className="grid-x">
                <ClapAnimation
                  clapFeedback={() => dispatch(clapFeedback(feedback.ID))}
                  isClapped={userHasClapped}
                >
                  <Clap width={"30"} height={"30"} />
                </ClapAnimation>
                <p>{numberOfClaps}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function FeedbackList({ feedbacks }) {
  return (
    <div className="cell small-6 small-offset-2">
      <ul className="feedback-list">
        {feedbacks.map(feedback => (
          <FeedbackItem feedback={feedback} />
        ))}
      </ul>
    </div>
  );
}

function SearchFeedbacks() {
  return (
    <div className="cell small-6 small-offset-2">
      <h4>Search</h4>
      <Formik
        initialValues={{
          searchTerm: ""
        }}
      >
        {({}) => (
          <Form>
            <div className="grid-x">
              <div className="cell small-12">
                <Field type="text" name="searchTerm" className="searchbar" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function Feedback() {
  const feedback = useSelector(state => state.Feedback);
  return (
    <div className="grid-x">
      <FloatingMaterial />
      <SearchFeedbacks />
      <FeedbackList feedbacks={feedback.feedbacks} />
    </div>
  );
}

export default Feedback;
