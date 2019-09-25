import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

function FeedbackCard({ text, keyId, votes, userName }) {
  return (
    <div className="cell small-12 feedback-box">
      <div className="grid-x">
        <div className="cell small-6">
          <p className="p box-text">{text}</p>
        </div>
        <div className="cell small-3">
          <p className="p box-text">{userName}</p>
        </div>
        <div className="cell small-3">
          <p className="p box-text">{votes}</p>
        </div>
      </div>
    </div>
  );
}

FeedbackCard.propTypes = {
  text: PropTypes.string.isRequired,
  keyId: PropTypes.string.isRequired
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
  feedbackList: PropTypes.array.isRequired
};

export default ListFeedback;
