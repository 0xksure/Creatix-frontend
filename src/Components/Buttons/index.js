import React, { useState } from "react";

import { useSpring, animated, useTransition } from "react-spring";

export function HeaderButton({ children }) {
  const [hover, setHover] = useState(false);
  const [props, set] = useSpring(() => ({
    from: {
      transform: "translate3d(0,0px,0)",
      opacity: 1
    },
    config: { duration: 120, tension: 550, friction: 20 }
  }));
  console.log(hover);
  return (
    <animated.div
      style={props}
      onMouseEnter={() =>
        set({
          from: { opacity: 0 },
          to: async (next, cancel) => {
            await next({ transform: "transform3d(0,-10px,0)", opacity: 1 });
            await next({ opacity: 0 });
            await next({
              transform: "transform3d(0,10px,0)",
              opacity: 0,
              color: "#ffaaee"
            });
            await next({ transform: "transform3d(0,0px,0)", opacity: 1 });
          }
        })
      }
    >
      {children}
    </animated.div>
  );
}

export function MainButton({ children, onToggle }) {
  const [props, set] = useSpring(() => ({ from: { opacity: 1 } }));
  return (
    <animated.div style={props} onClick={() => set({ opacity: 0.5 })}>
      <button
        className="creatix-btn primary"
        onClick={() => onToggle()}
        type="button"
      >
        <div className="text">{children}</div>
      </button>
    </animated.div>
  );
}
