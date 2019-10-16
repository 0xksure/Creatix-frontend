import { combineReducers } from "redux";
import IdeaCard from "./IdeaCard";
import Modal from "./Modal";
import FeedbackDemo from "./FeedbackDemo";

const rootReducer = combineReducers({
  IdeaCard,
  Modal,
  FeedbackDemo
});

export default rootReducer;
