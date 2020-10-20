import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchFeedback from './SearchFeedback';
import FeedbackList from './FeedbackList';
import NewFeedback from 'Components/Feedback/NewFeedback';
import FloatingButton from 'Components/Buttons/FloatingButton';
import FeedbackModal from 'Components/Feedback/Modal';
import useScrollToElement from 'Utils/ScrollToElement';

const Feedback: React.FC = () => {
  const feedback = useSelector((state) => state.Feedback);
  const [scrollIntoView] = useScrollToElement('new-feedback');
  const [draftFeedback, setDraftFeedback] = useState(false);
  const { fid } = useParams();
  const blurBackground = fid ? 'blur-on-modal' : '';
  return (
    <>
      <div className={`grid-x margin-top-l ${blurBackground}`}>
        <SearchFeedback />
        {draftFeedback && (
          <NewFeedback id={'new-feedback'} onExit={() => setDraftFeedback(false)} />
        )}
        <FeedbackList feedbacks={feedback.feedbacks} />
        <FloatingButton
          onClick={() => {
            setDraftFeedback(!draftFeedback);
            scrollIntoView();
          }}
        />
      </div>
      {fid && <FeedbackModal feedbackId={fid} />}
    </>
  );
};

export default Feedback;
