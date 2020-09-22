import React from "react";
import { useSpring, animated } from "react-spring";

interface Props {}

const HeaderButton: React.FC<Props> = ({ children }) => {
  const [props, set] = useSpring(() => ({
    from: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
    },
    to: async (next) => {
      await next({ transform: "transform3d(0,-10px,0)", opacity: 1 });
      await next({ opacity: 0 });
      await next({
        transform: "transform3d(0,10px,0)",
        opacity: 0,
        color: "#ffaaee",
      });
      await next({ transform: "transform3d(0,0px,0)", opacity: 1 });
    },
    config: { duration: 120, tension: 550, friction: 20 },
  }));
  return <animated.div style={props}>{children}</animated.div>;
};

export default HeaderButton;
