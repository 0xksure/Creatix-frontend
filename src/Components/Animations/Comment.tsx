import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  commentFeedback?: () => void;
  isCommented: boolean;
  onClick: () => void;
}

const CommentAnimation: React.FC<Props> = ({ children, isCommented, onClick }) => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
  }));
  return (
    <animated.div
      style={props}
      className="clap icon-center padding-right-s"
      onClick={() => {
        onClick();
        set({ opacity: 0.8 });
      }}
    >
      {children}
    </animated.div>
  );
};

export default CommentAnimation;
