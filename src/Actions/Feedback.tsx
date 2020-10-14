import {
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
  CLAP_FEEDBACK_REQUEST,
  CLAP_FEEDBACK_SUCCESS,
  CLAP_FEEDBACK_FAILURE,
} from '../Constants';
import { AppThunk } from 'store';

// ///////////////// POST FEEDACK /////////////////////////
function postFeedbackRequest() {
  return {
    type: POST_FEEDBACK_REQUEST,
  };
}

function postFeedbackSuccess(resp) {
  return {
    type: POST_FEEDBACK_SUCCESS,
    resp: resp,
  };
}

function postFeedbackFailure(error) {
  return {
    type: POST_FEEDBACK_FAILURE,
    error: error,
  };
}

export const postFeedback = (body): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(postFeedbackRequest());
    const resp = await fetch(`${process.env.API_URL}user/feedback`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    dispatch(postFeedbackSuccess(resp));
    dispatch(getFeedback());
  } catch (err) {
    dispatch(postFeedbackFailure(err));
  }
};

// ////////////////// GET FEEDBACK ////////////////////////
function getFeedbackRequest() {
  return {
    type: GET_FEEDBACK_REQUEST,
  };
}

function getFeedbackSuccess(feedbacks) {
  return {
    type: GET_FEEDBACK_SUCCESS,
    feedbacks,
  };
}

function getFeedackFailure(error) {
  return {
    type: GET_FEEDBACK_FAILURE,
    error,
  };
}

export const getFeedback = (): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(getFeedbackRequest());
    const resp = await fetch(`${process.env.API_URL}user/feedback`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const feedbacks = await resp.json();
    dispatch(getFeedbackSuccess(feedbacks));
  } catch (err) {
    dispatch(getFeedackFailure(err));
  }
};

function clapFeedbackRequest() {
  return {
    type: CLAP_FEEDBACK_REQUEST,
  };
}

function clapFeedbackSuccess(feedbacks) {
  return {
    type: CLAP_FEEDBACK_SUCCESS,
    feedbacks,
  };
}

function clapFeedbackFailure(error) {
  return {
    type: CLAP_FEEDBACK_FAILURE,
    error,
  };
}

export const clapFeedback = (fid: string): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(clapFeedbackRequest());
    const resp = await fetch(`${process.env.API_URL}user/feedback/${fid}/clap`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    dispatch(clapFeedbackSuccess(resp.json));
    dispatch(getFeedback());
  } catch (err) {
    dispatch(clapFeedbackFailure(err));
  }
};
