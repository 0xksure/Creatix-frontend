import React, { useEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import _ from "lodash";
import ListFeedback from "./ListFeedback";
import SubmitFeedback from "./SubmitFeedback";
import { voteFeedback } from "../../Actions/FeedbackDemo";

function FeedbackDemo({ vote }) {
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
      vote(randKey);
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
  vote: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ vote: voteFeedback }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(FeedbackDemo);
