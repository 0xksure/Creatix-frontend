import {
  ADD_FEEDBACK,
  SHOW_FEEDBACK,
  VOTE_FEEDBACK,
  FETCH_FEEDBACK
} from "../Constants";

const feedbackList = {
  1: {
    text: "Reduce churn rate by offering discounts",
    keyId: 1234,
    votes: 0,
    user: "Zoe",
    topics: ["Business", "Analytics"]
  },
  2: {
    text:
      "Reduce time spent in meetings by introducing meeting rooms with one high table.",
    keyId: 1111,
    votes: 0,
    user: "Anonymous",
    topics: ["General"]
  }
};

const initialState = {
  isFeedbackOpen: false,
  feedbackList: {}
};

export default function FeedbackDemo(state = initialState, action) {
  const newFeedbackName = Object.keys(state.feedbackList).length;
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbackList: {
          ...state.feedbackList,
          [newFeedbackName]: {
            text: action.text,
            keyId: action.keyId,
            votes: 0,
            user: action.user
          }
        }
      };
    case SHOW_FEEDBACK: {
      return {
        ...state,
        isFeedbackOpen: action.showFeedback
      };
    }
    case VOTE_FEEDBACK: {
      return {
        ...state,
        feedbackList: Object.keys(state.feedbackList).map(key => {
          if (key === action.keyId) {
            return {
              ...state.feedbackList[key],
              votes: state.feedbackList[key].votes + 1
            };
          }
          return state.feedbackList[key];
        })
      };
    }
    case FETCH_FEEDBACK: {
      return {
        ...state,
        feedbackList
      };
    }

    default:
      return state;
  }
}
