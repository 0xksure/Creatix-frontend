import { combineReducers } from "redux";
import IdeaCard from "./IdeaCard";
import Modal from "./modal";
import FeedbackDemo from "./FeedbackDemo";

const rootReducer = combineReducers({
  IdeaCard,
  Modal,
  FeedbackDemo
});

export default rootReducer;
