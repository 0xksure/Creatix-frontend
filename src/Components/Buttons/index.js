import React, { useState } from "react";

import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

export function HeaderButton({ children }) {
  const [props, set] = useSpring(() => ({
    from: {
      transform: "translate3d(0,0px,0)",
      opacity: 1
    },
    config: { duration: 120, tension: 550, friction: 20 }
  }));
  return (
    <animated.div
      style={props}
      onMouseEnter={() =>
        set({
          from: { opacity: 0 },
          to: async next => {
            await next({ transform: "transform3d(0,-10px,0)", opacity: 1 });
            await next({ opacity: 0 });
            await next({
              transform: "transform3d(0,10px,0)",
              opacity: 0,
              color: "#ffaaee"
            });
            await next({ transform: "transform3d(0,0px,0)", opacity: 1 });
          }
        })}
    >
      {children}
    </animated.div>
  );
}

HeaderButton.propTypes = {
  children: PropTypes.element.isRequired
};

export function MainButton({
  id = "undefined",
  size = "",
  round="",
  children,
  onToggle = () => {},
  modalIsOpen,
  buttonType = "button",
  disabled = false
}) {
  const [props] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: modalIsOpen ? 0.1 : 1 }
  }));
  return (
    <animated.div style={props}>
      <button
        id={id}
        className={`creatix-btn primary ${size} ${round}`}
        onClick={() => onToggle()}
        type={buttonType}
        disabled={disabled}
      >
        <div className="h4 medium-font small margin-zero">{children}</div>
      </button>
    </animated.div>
  );
}

MainButton.propTypes = {
  children: PropTypes.element.isRequired,
  onToggle: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  id: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  size: PropTypes.string
};

MainButton.defaultTypes = {
  id: "undefined"
};

export function CircleButton({ children, onClick }) {
  const [pressed] = useState(false);
  const [props, set] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: pressed ? 0.5 : 1 }
  }));
  return (
    <animated.div style={props}>
      <button
        className="creatix-btn circle"
        type="button"
        onClick={() => {
          set({
            from: { opacity: 1 },
            to: async next => {
              await next({ opacity: 0.5 });
              await next({ opacity: 1 });
            }
          });
          onClick();
        }}
      >
        {children}
      </button>
    </animated.div>
  );
}

CircleButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired
};

export function TopicBoxes({ topics, color = "gray" }) {
  return (
    <div className="topic-boxes">
      {topics.map((topic, idx) => {
        return (
          <div className={`topic-box ${color} `} key={idx}>
            <div className="p topic-content">{topic}</div>
          </div>
        );
      })}
    </div>
  );
}

TopicBoxes.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string
};
