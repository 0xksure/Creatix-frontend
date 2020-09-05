import { combineReducers } from "redux";
import IdeaCard from "./IdeaCard";
import Modal from "./modal";
import Auth from "./Auth";
import Feedback from "./Feedback";

const rootReducer = combineReducers({
  IdeaCard,
  Modal,
  Auth,
  Feedback
});

export default rootReducer;
