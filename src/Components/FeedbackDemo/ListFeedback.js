import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CircleButton, TopicBoxes } from "../Buttons";
import { voteFeedback } from "../../Actions/FeedbackDemo";

function FeedbackCard({ text, keyId, userName, votes, topics }) {
  const dispatch = useDispatch();
  return (
    <div className="cell small-12 feedback-box" key={keyId}>
      <div className="grid-x">
        <div className="cell small-12 medium-12 large-12">
          <p className="p box-text">{text}</p>
        </div>
        <div className="cell small-6 medium-3 large-10">
          <p className="p box-text">{userName}</p>
        </div>
        <div className="cell small-6 medium-3 large-2 flex">
          <CircleButton onClick={() => dispatch(voteFeedback(keyId))}>
            <div className="p">{votes}</div>
          </CircleButton>
        </div>
        <div className="cell small-12 medium-3 large-3">
          <TopicBoxes topics={topics} />
        </div>
      </div>
    </div>
  );
}

FeedbackCard.propTypes = {
  text: PropTypes.string.isRequired,
  keyId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired
};

function ListFeedback({ feedbackList }) {
  const feedbackListOrdered = Object.keys(feedbackList).sort(function(a, b) {
    return feedbackList[a] - feedbackList[b];
  });
  return (
    <div className="grid-x feedback-list">
      {feedbackListOrdered.map(key => {
        return (
          <FeedbackCard
            text={feedbackList[key].text}
            keyId={key}
            votes={feedbackList[key].votes}
            userName={feedbackList[key].user}
            topics={feedbackList[key].topics}
          />
        );
      })}
    </div>
  );
}

ListFeedback.propTypes = {
  feedbackList: PropTypes.object.isRequired
};

export default ListFeedback;
