import React from 'react';
import { Comment } from 'Components/Feedback/Comments/types';
import ClapAnimation from 'Components/Animations/Clap';
import ClapIcon from 'Components/Icons/ClapIcon';

interface CLProp {
  comment: Comment;
}

const CommentListItem: React.FC<CLProp> = (props) => {
  const { comment } = props;
  return (
    <li className="comment-list-item">
      <div className="grid-x">
        <div className="cell small-2">{comment?.person.firstname}</div>
        <div className="cell small-8">
          <div className="grid-x">
            <div className="cell small-12">{comment.comment}</div>
          </div>
        </div>
        <div className="cell small-2">
          <ClapAnimation clapFeedback={() => console.log('clapp')} isClapped={false}>
            <ClapIcon width="20" height="20" />
          </ClapAnimation>
        </div>
      </div>
    </li>
  );
};

export default CommentListItem;
