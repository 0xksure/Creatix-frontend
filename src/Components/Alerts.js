import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export default function AlertBox({ children, alertType }) {
  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <div className={`grid-x alert ${alertType}`}>
        <div className="cell text">{children}</div>
      </div>
    </animated.div>
  ));
}
