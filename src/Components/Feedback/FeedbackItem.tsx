import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import ClapAnimation from 'Components/Animations/Clap';
import ClapIcon from 'Components/Icons/ClapIcon';
import CommentAnimation from 'Components/Animations/Comment';
import CommentIcon from 'Components/Icons/CommentIcon';
import UnionIcon from 'Components/Icons/UnionIcon';
import { commentFeedback } from 'Actions/Feedback';
import { Feedback } from 'Components/Feedback/types';

interface Props {
  feedback: Feedback;
  onSubmit: (data: any) => void;
}

const FeedbackItem: React.FC<Props> = ({ feedback, onSubmit }) => {
  const userID = useSelector((state) => state.Auth.UserID);
  const dispatch = useDispatch();
  const history = useHistory();
  const userOwnsFeedback = feedback.person.id === userID;
  const numberOfClaps = feedback.claps.length;
  const numberOfComments = feedback.comments.length;
  const userHasClapped = feedback.claps.some((clap) => clap.userId === userID);
  const userHasCommented = feedback.comments.some((comment) => comment.userId === userID);

  return (
    <li className="cell small-12 ">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-10 medium-10 large-6 feedback-item">
          <div className="grid-x">
            <div className="cell small-3">
              <p>{`${feedback.person.firstname}`}</p>
            </div>
            <div className="cell small-9">
              <div className="grid-x">
                <div className="cell small-11">
                  <p className="p bold-font medium margin-bottom-s">{feedback.title}</p>
                </div>
                {userOwnsFeedback && <div className="cell small-1">X</div>}
                <div className="cell small-12 margin-bottom-m">
                  <p className="p margin-zero">{feedback.description}</p>
                </div>
                <div className="cell small-12">
                  <div className="grid-x align-right">
                    <div className="cell small-6"></div>
                    <div className="cell small-6">
                      <div className="grid-x">
                        <div className="cell small-4 feedback-item__icon">
                          <ClapAnimation
                            clapFeedback={() => onSubmit({ action: 2, feedbackId: feedback.id })}
                            isClapped={userHasClapped}
                          >
                            <ClapIcon width="20" height="20" />
                          </ClapAnimation>
                          <div>{numberOfClaps}</div>
                        </div>
                        <div className="cell small-4 feedback-item__icon">
                          <CommentAnimation
                            onClick={() => history.push(`feedback/${feedback.id}`)}
                            commentFeedback={() => dispatch(commentFeedback(feedback.id, 'okok'))}
                            isCommented={userHasCommented}
                          >
                            <CommentIcon width="20" height="20" />
                          </CommentAnimation>
                          <div>{numberOfComments}</div>
                        </div>
                        <div className="cell small-4 feedback-item__icon">
                          <CommentAnimation
                            onClick={() => console.log('union')}
                            commentFeedback={() => dispatch(commentFeedback(feedback.id, 'okok'))}
                            isCommented={userHasCommented}
                          >
                            <UnionIcon width="20" height="20" />
                          </CommentAnimation>
                          <div>{numberOfComments}</div>
                        </div>
                      </div>
                      <div className="grid-x"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeedbackItem;
