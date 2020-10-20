export const selectFeedback = (state, fid) => {
  const feedbacks = state.Feedback.feedbacks;
  console.log('feedbacks: ', feedbacks);
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
