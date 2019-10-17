import React from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

export default function BlowUpOnHover({ children }) {
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
          to: async next => {
            await next({ opacity: 0 });
          }
        })}
    >
      {children}
    </animated.div>
  );
}

BlowUpOnHover.propTypes = {
  children: PropTypes.element.isRequired
};
