import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  commentFeedback: () => void;
  isCommented: boolean;
}

const colorVariations = ["rgba(10, 20, 200, 1)", "rgba(10, 200, 200, 1)"];
const CommentAnimation: React.FC<Props> = ({
  children,
  commentFeedback,
  isCommented,
}) => {
  const [colorNum, setColorNum] = useState(isCommented ? 1 : 0);
  const [props, setSpring] = useSpring(() => ({
    from: {
      fill: colorVariations[colorNum],
    },
    to: async (next) => {
      await next({ fill: colorVariations[(colorNum + 1) % 2] });
    },
  }));
  return (
    <animated.div
      style={props}
      className="clap icon-center padding-right-s"
      onClick={() => {
        setSpring({
          from: { fill: colorVariations[colorNum] },
        });
        setColorNum(colorNum + 1);
        commentFeedback();
      }}
    >
      {children}
    </animated.div>
  );
};

export default CommentAnimation;
