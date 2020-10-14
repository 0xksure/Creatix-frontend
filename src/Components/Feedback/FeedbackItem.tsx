import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClapAnimation from 'Components/Animations/Clap';
import ClapIcon from 'Components/Icons/ClapIcon';
import CommentAnimation from 'Components/Animations/Comment';
import CommentIcon from 'Components/Icons/CommentIcon';
import { clapFeedback } from 'Actions/Feedback';
import { Feedback } from 'Components/Feedback/types';

interface Props {
  feedback: Feedback;
  key: string;
}

const FeedbackItem: React.FC<Props> = ({ feedback, key }) => {
  const userID = useSelector((state) => state.Auth.UserID);
  const dispatch = useDispatch();
  const numberOfClaps = feedback.claps.length;

  const userHasClapped = feedback.claps.some((clap) => clap.userId === userID);
  return (
    <li key={key} className="feedback-item">
      <div className="grid-x grid-margin-x">
        <div className="cell small-3">
          <p>{`${feedback.person.firstname}`}</p>
        </div>
        <div className="cell small-9">
          <div className="grid-x">
            <div className="cell small-12">
              <p className="p bold-font medium margin-bottom-s">{feedback.title}</p>
            </div>
            <div className="cell small-12 margin-bottom-m">
              <p className="p margin-zero">{feedback.description}</p>
            </div>
            <div className="cell small-12">
              <div className="grid-x align-rigth">
                <div className="cell small-6">
                  <div className="grid-x">
                    <ClapAnimation
                      clapFeedback={() => dispatch(clapFeedback(feedback.id))}
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
    </li>
  );
};

export default FeedbackItem;
