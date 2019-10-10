import React from "react";
import { useSpring, animated } from "react-spring";

export function BlowUpOnHover({ children }) {
  const [props, setSpring] = useSpring(() => ({
    from: {
      opacity: 1
    }
  }));
  return (
    <animated.div
      syle={props}
      onMouseEnter={() =>
        setSpring({
          from: { opacity: 1 },
          to: async (next, cancel) => {
            await next({ opacity: 0 });
          }
        })
      }
    >
      {children}
    </animated.div>
  );
}
