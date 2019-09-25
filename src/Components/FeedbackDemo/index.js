import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import ListFeedback from "./ListFeedback";
import SubmitFeedback from "./SubmitFeedback";
import { voteFeedback } from "../../Actions/FeedbackDemo";
import _ from "lodash";

function FeedbackDemo({ isFeedbackOpen, feedbackList, voteFeedback }) {
  useEffect(() => {
    // Random generating votest
    const interval = setInterval(() => {
      const randKey = _.sample(
        feedbackList.map(value => {
          return value.keyId;
        })
      );
      console.log(randKey);
      voteFeedback(randKey);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 feedback-box">
        <ListFeedback feedbackList={feedbackList} />
      </div>
      <div className="cell small-12">
        <SubmitFeedback />
      </div>
    </div>
  );
}

FeedbackDemo.propTypes = {
  isFeedbackOpen: PropTypes.bool.isRequired,
  feedbackList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    isFeedbackOpen: state.FeedbackDemo.isFeedbackOpen,
    feedbackList: state.FeedbackDemo.feedbackList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ voteFeedback }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackDemo);
