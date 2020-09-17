function FeedbackModal({ feedback }) {
  return (
    <Modal>
      <div className="grid-x">
        <div className="cell small-2">user</div>
        <div className="cell small-9">{feedback.description}</div>
        <div className="cell small-1">
          <div className="grid-x align-right">X</div>
        </div>
      </div>
      <div className="grid-x">
        <div className="cell">Claps and messages</div>
        <div className="cell">
          <div className="comment">cool</div>
          <div className="comment">ok</div>
        </div>
      </div>
    </Modal>
  );
}
