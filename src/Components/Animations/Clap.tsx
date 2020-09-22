import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  clapFeedback: () => void;
  isClapped: boolean;
}

const colorVariations = ["rgba(10, 20, 200, 1)", "rgba(10, 200, 200, 1)"];

const ClapAnimation: React.FC<Props> = ({
  children,
  clapFeedback,
  isClapped,
}) => {
  const [colorNum, setColorNum] = useState(isClapped ? 1 : 0);
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
        clapFeedback();
      }}
    >
      {children}
    </animated.div>
  );
};
export default ClapAnimation;
