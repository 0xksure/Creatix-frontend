import { RootState } from 'store';

export const selectFeedback = (state: RootState, fid: string): {} => {
  const feedbacks = state.Feedback.feedbacks;
  if (feedbacks) {
    const filteredFeedbacks = feedbacks.filter((feedback) => {
      return feedback.id === fid;
    });

    if (filteredFeedbacks.length > 0) {
      return filteredFeedbacks[0];
    }
  }

  return {};
};
