import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchFeedback from './SearchFeedback';
import FeedbackList from './FeedbackList';
import NewFeedback from 'Components/Feedback/NewFeedback';
import FloatingButton from 'Components/Buttons/FloatingButton';

const Feedback: React.FC = () => {
  const feedback = useSelector((state) => state.Feedback);
  const [draftFeedback, setDraftFeedback] = useState(false);
  return (
    <div className="grid-x margin-top-l">
      <SearchFeedback />
      {draftFeedback && <NewFeedback onExit={() => setDraftFeedback(false)} />}
      <FeedbackList feedbacks={feedback.feedbacks} />
      <FloatingButton onClick={() => setDraftFeedback(!draftFeedback)} />
    </div>
  );
};

export default Feedback;
