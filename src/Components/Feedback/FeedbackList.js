function FeedbackList({ feedbacks }) {
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <ul className="feedback-list">
          {feedbacks.map(feedback => (
            <FeedbackItem feedback={feedback} />
          ))}
        </ul>
      </div>
    </div>
  );
}
