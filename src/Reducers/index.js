import { combineReducers } from "redux";
import IdeaCard from "./IdeaCard";
import Modal from "./modal";
import FeedbackDemo from "./FeedbackDemo";
import Auth from "./Auth";
import Feedback from "./Feedback";

const rootReducer = combineReducers({
  IdeaCard,
  Modal,
  FeedbackDemo,
  Auth,
  Feedback
});

export default rootReducer;
