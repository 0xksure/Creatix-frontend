import { ADD_FEEDBACK, SHOW_FEEDBACK, VOTE_FEEDBACK } from "../Constants";

const initialState = {
  isFeedbackOpen: false,
  feedbackList: [
    {
      text: "Reduce churn rate by offering discounts",
      keyId: 1234,
      votes: 0,
      user: "Zoe"
    },
    {
      text:
        "Reduce time spent in meetings by introducing meeting rooms with one high table.",
      keyId: 1111,
      votes: 0,
      user: "Anonymous"
    }
  ]
};

export default function FeedbackDemo(state = initialState, action) {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbackList: [
          ...state.feedbackList,
          {
            text: action.text,
            keyId: action.keyId,
            votes: 0,
            user: action.user
          }
        ]
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
        feedbackList: state.feedbackList.map(value => {
          if (value.keyId === action.keyId) {
            return {
              ...value,
              votes: value.votes + 1
            };
          }
          return value;
        })
      };
    }
    default:
      return state;
  }
}
