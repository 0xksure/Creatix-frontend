import React from 'react';
import { Comment } from 'Components/Feedback/Comments/types';
import CommentListItem from 'Components/Feedback/Comments/CommentListItem';

interface Prop {
  comments: Array<Comment>;
}

const CommentList: React.FC<Prop> = (props) => {
  const { comments } = props;
  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return <CommentListItem comment={comment} />;
      })}
    </ul>
  );
};

export default CommentList;
