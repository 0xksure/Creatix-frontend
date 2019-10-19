import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { CircleButton } from "../Buttons";

function FeedbackCard({ text, userName, votes }) {
  return (
    <div className="cell small-12 feedback-box">
      <div className="grid-x">
        <div className="cell small-12 medium-12 large-12">
          <p className="p box-text">{text}</p>
        </div>
        <div className="cell small-6 medium-3 large-10">
          <p className="p box-text">{userName}</p>
        </div>
        <div className="cell small-6 medium-3 large-2 flex">
          <CircleButton>
            <div className="p">{votes}</div>
          </CircleButton>
        </div>
        <div className="cell small-12 medium-3 large-3">
          <div className="topic-boxes">
            <div className="topic-box  gray">
              <div className="p topic-content">General </div>
            </div>
            <div className="topic-box  gray">
              <div className="p topic-content">New topic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FeedbackCard.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

function ListFeedback({ feedbackList }) {
  return (
    <div className="grid-x feedback-list">
      {_.orderBy(feedbackList, ["votes"], ["desc"]).map(
        ({ text, keyId, votes, user }) => (
          <FeedbackCard
            text={text}
            keyId={keyId}
            votes={votes}
            userName={user}
          />
        )
      )}
    </div>
  );
}

ListFeedback.propTypes = {
  feedbackList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListFeedback;
