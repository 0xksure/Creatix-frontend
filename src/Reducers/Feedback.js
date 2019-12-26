import {
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
  CLAP_FEEDBACK_REQUEST,
  CLAP_FEEDBACK_SUCCESS,
  CLAP_FEEDBACK_FAILURE
} from "../Constants";
import { actions } from "react-redux-form";

const initialState = {
  feedbacks: [],
  isLoadingFeedbacks: false,
  loadingFeedbacksSuccess: true,
  errorMessage: "",
  isClappingFeedback: false,
  clappingFeedbakSuccess: true
};

export default function Feedback(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDBACK_REQUEST:
      return {
        ...state,
        isLoadingFeedbacks: true,
        loadingFeedbacksSuccess: false,
        errorMessage: ""
      };
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        isLoadingFeedbacks: false,
        loadingFeedbacksSuccess: true,
        feedbacks: action.feedbacks,
        errorMessage: ""
      };
    case GET_FEEDBACK_FAILURE:
      return {
        ...state,
        isLoadingFeedbacks: false,
        loadingFeedbacksSuccess: false,
        errorMessage: action.error
      };
    case CLAP_FEEDBACK_REQUEST:
      return {
        ...state,
        isClappingFeedback: true,
        errorMessage: "",
        clappingFeedbakSuccess: false
      };
    case CLAP_FEEDBACK_SUCCESS:
      return {
        ...state,
        isClappingFeedback: false,
        errorMessage: "",
        clappingFeedbakSuccess: true,
        feedbacks: action.feedbacks
      };
    case CLAP_FEEDBACK_REQUEST:
      return {
        ...state,
        isClappingFeedback: false,
        errorMessage: action.error,
        clappingFeedbakSuccess: false
      };
    default:
      return state;
  }
}
