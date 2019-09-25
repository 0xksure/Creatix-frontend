import { combineReducers } from "redux";
import ideaCards from "./ideaCards";
import modal from "./modal";
import FeedbackDemo from "./FeedbackDemo";

const rootReducer = combineReducers({
  ideaCards,
  modal,
  FeedbackDemo
});

export default rootReducer;
