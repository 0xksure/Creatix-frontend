import React, { useEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import ListFeedback from "./ListFeedback";
import SubmitFeedback from "./SubmitFeedback";
import { voteFeedback } from "../../Actions/FeedbackDemo";
import _ from "lodash";

function FeedbackDemo({ voteFeedback }) {
  const isFeedbackOpen = useSelector(
    state => state.FeedbackDemo.isFeedbackOpen,
    shallowEqual
  );
  const feedbackList = useSelector(
    state => state.FeedbackDemo.feedbackList,
    shallowEqual
  );
  useEffect(() => {
    // Random generating votest
    const interval = setInterval(() => {
      const randKey = _.sample(
        feedbackList.map(value => {
          return value.keyId;
        })
      );
      voteFeedback(randKey);
    }, 100000);
    return () => clearInterval(interval);
  });

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 feedback-display">
        <ListFeedback feedbackList={feedbackList} />
      </div>
      <div className="cell small-12">
        <SubmitFeedback />
      </div>
    </div>
  );
}

FeedbackDemo.propTypes = {
  voteFeedback: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ voteFeedback }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(FeedbackDemo);
