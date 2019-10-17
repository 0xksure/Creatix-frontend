import { ADD_FEEDBACK, SHOW_FEEDBACK, VOTE_FEEDBACK } from "../Constants";

export function addFeedback(feedbackText, feedbackId, feedbackUser) {
  return {
    type: ADD_FEEDBACK,
    text: feedbackText,
    keyId: feedbackId,
    user: feedbackUser
  };
}

export function toggleFeedback(isFeedbackOpen) {
  return {
    type: SHOW_FEEDBACK,
    isFeedbackOpen
  };
}

export function voteFeedback(keyId) {
  return {
    type: VOTE_FEEDBACK,
    keyId
  };
}

export function loadFeedback() {}
