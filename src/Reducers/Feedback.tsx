import {
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
  CLAP_FEEDBACK_REQUEST,
  CLAP_FEEDBACK_SUCCESS,
  CLAP_FEEDBACK_FAILURE,
} from '../Constants';
import { Feedback as f } from 'Components/Feedback/types';

interface State {
  feedbacks: f[];
  isLoadingFeedbacks: boolean;
  loadingFeedbacksSuccess: boolean;
  errorMessage: string;
  isClappingFeedback: boolean;
  clappingFeedbakSuccess: boolean;
}

interface ActionState {
  type: string;
  resp?: f[];
  err?: string;
}

type FeedbackActionType = ActionState;

const initialState = {
  feedbacks: [],
  isLoadingFeedbacks: false,
  loadingFeedbacksSuccess: true,
  errorMessage: '',
  isClappingFeedback: false,
  clappingFeedbakSuccess: true,
};

const Feedback = (state: State = initialState, action: FeedbackActionType): State => {
  switch (action.type) {
    case GET_FEEDBACK_REQUEST:
      return {
        ...state,
        isLoadingFeedbacks: true,
        loadingFeedbacksSuccess: false,
        errorMessage: '',
      };
    case GET_FEEDBACK_SUCCESS:
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
    default:
      return state;
  }
};

export default Feedback;
