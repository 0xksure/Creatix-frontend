import {
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
  CLAP_FEEDBACK_REQUEST,
  CLAP_FEEDBACK_SUCCESS,
  CLAP_FEEDBACK_FAILURE
} from "../Constants";

function getFeedbackRequest() {
  return {
    type: GET_FEEDBACK_REQUEST
  };
}

function getFeedbackSuccess(feedbacks) {
  return {
    type: GET_FEEDBACK_SUCCESS,
    feedbacks
  };
}

function getFeedackFailure(error) {
  return {
    type: GET_FEEDBACK_FAILURE,
    error
  };
}

export const getFeedback = () => {
  return dispatch => {
    fetch(process.env.API_URL + "user/feedback", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(feedbacks => {
        dispatch(getFeedbackSuccess(feedbacks));
      })
      .catch(error => {
        dispatch(getFeedackFailure(error));
      });
  };
};

function clapFeedbackRequest() {
  return {
    type: CLAP_FEEDBACK_REQUEST
  };
}

function clapFeedbackSuccess(feedbacks) {
  return {
    type: CLAP_FEEDBACK_SUCCESS,
    feedbacks
  };
}

function clapFeedbackFailure(error) {
  return {
    type: CLAP_FEEDBACK_FAILURE,
    error
  };
}

export const clapFeedback = fid => {
  return dispatch => {
    dispatch(clapFeedbackRequest());
    console.log("ClapFeedback");
    fetch(`${process.env.API_URL}user/feedback/${fid}/clap`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(feedbacks => {
        dispatch(clapFeedbackSuccess(feedbacks));
      })
      .catch(error => {
        dispatch(clapFeedbackFailure(error));
      });
  };
};