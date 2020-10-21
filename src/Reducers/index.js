import { combineReducers } from 'redux';
import Modal from './modal';
import Auth from './Auth';
import Feedback from './Feedback';

const rootReducer = combineReducers({
  Modal,
  Auth,
  Feedback,
});

export default rootReducer;
