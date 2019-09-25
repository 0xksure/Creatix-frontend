export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const SHOW_FEEDBACK = "SHOW_FEEDBACK";
export const LOAD_FEEDBACK = "LOAD_FEEDBACK";
export const VOTE_FEEDBACK = "VOTE_FEEDBACK";

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
