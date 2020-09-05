import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const colorVariations = ["rgba(10, 20, 200, 1)", "rgba(10, 200, 200, 1)"];
export function CommentAnimation({ children, commentFeedback, isCommented }) {
  const [colorNum, setColorNum] = useState(isCommented ? 1 : 0);
  const [props, setSpring] = useSpring(() => ({
    from: {
      fill: colorVariations[colorNum]
    }
  }));
  return (
    <animated.div
      style={props}
      className="clap icon-center padding-right-s"
      onClick={() => {
        setSpring({
          from: { fill: colorVariations[colorNum] },
          to: async next => {
            await next({ fill: colorVariations[(colorNum + 1) % 2] });
          }
        });
        setColorNum(colorNum + 1);
        commentFeedback();
      }}
    >
      {children}
    </animated.div>
  );
}

export const Comment = props => (
  <svg xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    width={props.width}
  >
    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
);
