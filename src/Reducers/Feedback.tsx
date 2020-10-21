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
  COMMENT_FEEDBACK_REQUEST,
  COMMENT_FEEDBACK_SUCCESS,
  COMMENT_FEEDBACK_FAILURE,
} from '../Constants';
import { Feedback as f } from 'Components/Feedback/types';
import { LOCATION_CHANGE } from 'connected-react-router';

export interface FeedbackState {
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string;
  feedbacks: f[];
  isLoadingFeedbacks: boolean;
  loadingFeedbacksSuccess: boolean;
  errorMessage: string;
  isClappingFeedback: boolean;
  clappingFeedbakSuccess: boolean;
  commentFeedbackSuccess: boolean;
  commentFeedbackError: string;
}

interface ActionState {
  type: string;
  resp?: f[];
  err?: string;
}

type FeedbackActionType = ActionState;

const initialState = {
  isSubmitting: false,
  submitSuccess: false,
  submitError: '',
  feedbacks: [],
  isLoadingFeedbacks: false,
  loadingFeedbacksSuccess: true,
  errorMessage: '',
  isClappingFeedback: false,
  clappingFeedbakSuccess: true,
  commentFeedbackSuccess: false,
  commentFeedbackError: '',
};

const Feedback = (state: FeedbackState = initialState, action: FeedbackActionType): State => {
  console.log('state: ', action.type);
  switch (action.type) {
    case POST_FEEDBACK_REQUEST:
      return {
        ...state,
        isSubmitting: true,
        submitSuccess: false,
        submitError: '',
      };
    case POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        submitSuccess: true,
      };
    case POST_FEEDBACK_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        submitSuccess: false,
        submitError: action.error,
      };
    case GET_FEEDBACK_REQUEST:
      return {
        ...state,
        isLoadingFeedbacks: true,
        loadingFeedbacksSuccess: false,
        errorMessage: '',
      };
    case GET_FEEDBACK_SUCCESS:
      console.log('action: ', action);
      return {
        ...state,
        isLoadingFeedbacks: false,
        loadingFeedbacksSuccess: true,
        feedbacks: action.feedbacks,
        errorMessage: '',
      };
    case GET_FEEDBACK_FAILURE:
      return {
        ...state,
        isLoadingFeedbacks: false,
        loadingFeedbacksSuccess: false,
        errorMessage: action.error,
      };
    case CLAP_FEEDBACK_SUCCESS:
      return {
        ...state,
        isClappingFeedback: false,
        errorMessage: '',
        clappingFeedbakSuccess: true,
        feedbacks: action.feedbacks,
      };
    case CLAP_FEEDBACK_REQUEST:
      return {
        ...state,
        isClappingFeedback: true,
        errorMessage: action.error,
        clappingFeedbakSuccess: false,
      };
    case CLAP_FEEDBACK_FAILURE:
      return {
        ...state,
      };
    case COMMENT_FEEDBACK_REQUEST:
      return {
        ...state,
        commentFeedbackSuccess: false,
        commentFeedbackError: '',
      };
    case COMMENT_FEEDBACK_SUCCESS:
      return {
        ...state,
        commentFeedbackSuccess: true,
        commentFeedbackError: '',
      };
    case COMMENT_FEEDBACK_FAILURE:
      return {
        ...state,
        commentFeedbackSuccess: false,
        commentFeedbackError: action.error,
      };
    case LOCATION_CHANGE:
      return state;
    default:
      return state;
  }
};

export default Feedback;
