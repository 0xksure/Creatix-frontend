import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchFeedback from './SearchFeedback';
import FeedbackList from './FeedbackList';
import NewFeedback from 'Components/Feedback/NewFeedback';
import FloatingButton from 'Components/Buttons/FloatingButton';
import FeedbackModal from 'Components/Feedback/Modal';
import { getFeedbackSuccess } from 'Actions/Feedback';
import useWebSocket from 'Utils/useWebsocket';
import { FeedbackValues } from './types';

const Feedback: React.FC = () => {
  const { companyId } = useParams();
  const [draftFeedback, setDraftFeedback] = useState(false);
  const { fid } = useParams();
  const blurBackground = fid ? 'blur-on-modal' : '';
  const [feedbacks, setPath, wsSend] = useWebSocket(`${companyId}/feedback`, getFeedbackSuccess);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<FeedbackValues[]>([]);
  useEffect(() => {
    setPath(`${companyId}/feedback`);
  }, [companyId]);
  return (
    <>
      <div className={`grid-x margin-top-l ${blurBackground}`}>
        <SearchFeedback companyId={companyId} setFilteredFeedbacks={setFilteredFeedbacks} />
        {draftFeedback && (
          <NewFeedback
            id={'new-feedback'}
            onExit={() => setDraftFeedback(false)}
            onSubmit={(feedback: string) => wsSend({ action: 1, feedback })}
          />
        )}
        <FeedbackList
          feedbacks={filteredFeedbacks?.length > 0 ? filteredFeedbacks : feedbacks}
          onSubmit={wsSend}
        />
        <FloatingButton
          onClick={() => {
            setDraftFeedback(!draftFeedback);
          }}
        />
      </div>
      {fid && <FeedbackModal feedbackId={fid} onSubmit={wsSend} />}
    </>
  );
};

export default Feedback;
