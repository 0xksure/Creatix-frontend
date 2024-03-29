import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

interface Props {
  alertType: string;
}

const AlertBox: React.FC<Props> = ({ children, alertType }) => {
  const [show] = useState(false);
  const transitions = useTransition(show, null, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
  });
  return transitions.map(({ props, key }) => (
    <animated.div key={key} style={props}>
      <div className={`grid-x alert ${alertType}`}>
        <div className="cell text white">{children}</div>
      </div>
    </animated.div>
  ));
};

export default AlertBox;
