import React, { useEffect } from 'react';
import Modal from 'Components/Modals';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFeedback } from 'Components/Feedback/selectors';
import ClapAnimation from 'Components/Animations/Clap';
import ClapIcon from 'Components/Icons/ClapIcon';
import NewComment from 'Components/Feedback/Comments/NewComment';
import CommentList from 'Components/Feedback/Comments/CommentList';
interface Props {
  feedbackId: string;
  onSubmit: (data: any) => void;
}

const FeedbackModal: React.FC<Props> = ({ feedbackId, onSubmit }) => {
  const userID = useSelector((state) => state.Auth.UserID);
  const history = useHistory();
  const feedback = useSelector((state) => selectFeedback(state, feedbackId));
  const userHasClapped = feedback?.claps?.some((clap) => clap.userId === userID);
  const numberOfClaps = feedback?.claps?.length;
  const { companyId } = useParams();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <Modal isOpen={Object.keys(feedback).length > 0}>
      {Object.keys(feedback).length > 0 && (
        <>
          <div className="grid-x grid-margin-x feedback-modal-item">
            <div className="cell small-3">
              <p>{`${feedback?.person?.firstname}`}</p>
            </div>
            <div className="cell small-9">
              <div className="grid-x">
                <div className="cell small-11">
                  <p className="p bold-font medium margin-bottom-s">{feedback?.title}</p>
                </div>
                <button
                  className="cell small-1 exit-button--white"
                  onClick={() => history.push(`/${companyId}/feedback`)}
                >
                  X
                </button>
                <div className="cell small-12 margin-bottom-m">
                  <p className="p margin-zero">{feedback?.description}</p>
                </div>
                <div className="cell small-12">
                  <div className="grid-x align-rigth">
                    <div className="cell small-6">
                      <div className="grid-x">
                        <ClapAnimation
                          clapFeedback={() => onSubmit({ action: 2, feedbackId: feedback.id })}
                          isClapped={userHasClapped}
                        >
                          <ClapIcon width="20" height="20" />
                        </ClapAnimation>
                        <div>{numberOfClaps}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-x grid-margin-x feedback-modal-item">
            <div className="cell small-12">
              <CommentList comments={feedback?.comments} />
            </div>
          </div>
          <div className="grid-x grid-margin-x feedback-modal-item">
            <div className="cell small-12">
              <NewComment feedbackId={feedbackId} onSubmit={onSubmit} />
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default FeedbackModal;
