import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Clap, ClapAnimation } from "../Animations/Clap";
import { Comment, CommentAnimation } from '../Animations/Comment'
import Modal from '../Modals'
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
  const numberOfClaps = feedback.claps.length;
  const createdDate = beautifulDiffDate(
    new Date(),
    new Date(feedback.CreatedAt)
  );

  const userHasClapped = feedback.claps.some(clap => clap.UserId == userID);
  return (
    <li key={feedback.ID} className="feedback-item">
      <div className="grid-x grid-margin-x">
        <div className="cell small-3">
          <p>{`${feedback.person.firstname} ${feedback.person.lastname} `}</p>
        </div>
        <div className="cell small-9">
          <div className="grid-x">
            <div lassName="cell small-12">
              <p className="p bold-font medium margin-bottom-s">
                {feedback.title}
              </p>
            </div>
            <div className="cell small-12 margin-bottom-m">
              <p className="p margin-zero">{feedback.description}</p>
            </div>
            <div className="cell small-12">
              <div className="grid-x align-rigth">
                <div className="cell small-6">
                  <div className="grid-x">
                    <ClapAnimation
                      clapFeedback={() => dispatch(clapFeedback(feedback.id))}
                      isClapped={userHasClapped}
                    >
                      <Clap width={"20"} height={"20"} />
                    </ClapAnimation>
                    <div>{numberOfClaps}</div>
                  </div>
                </div>
                <div className="cell small-6">
                  <div className="grid-x ">
                    <CommentAnimation
                      commentFeedback={() => dispatch(clapFeedback(feedback.id))}
                      isCommented={userHasClapped}
                    >
                      <Comment width={"20"} height={"20"} />
                    </CommentAnimation>
                    <div>{numberOfClaps}</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li >
  );
}

function FeedbackModal({ feedback }) {
  return (
    <Modal>
      <div className="grid-x">
        <div className="cell small-2">
          user
          </div>
        <div className="cell small-9">
          {feedback.description}
        </div>
        <div className="cell small-1">
          <div className="grid-x align-right">
            X
            </div>
        </div>
      </div>
      <div className="grid-x">
        <div className="cell">
          Claps and messages
                </div>
        <div className="cell">
          <div className="comment">
            cool
            </div>
          <div className="comment">
            ok
          </div>
        </div>
      </div>
    </Modal>
  )
}

function FeedbackList({ feedbacks }) {
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <ul className="feedback-list">
          {feedbacks.map(feedback => (
            <FeedbackItem feedback={feedback} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SearchFeedbacks() {
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <div className="cell small-6">
          <h4>Search</h4>
          <Formik
            initialValues={{
              searchTerm: ""
            }}
          >
            {({ }) => (
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
      </div>
    </div>
  );
}

function Feedback() {
  const feedback = useSelector(state => state.Feedback);
  return (
    <div className="grid-x">
      <SearchFeedbacks />
      <FeedbackList feedbacks={feedback.feedbacks} />
      <FeedbackModal feedback={feedback.feedbacks} />
    </div>
  );
}

export default Feedback;
