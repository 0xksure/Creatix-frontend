import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  icon: Element;
}

const CircleButton: React.FC<Props> = ({ children, onClick }) => {
  const [pressed] = useState(false);
  const [props, set] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: pressed ? 0.5 : 1 },
  }));
  return (
    <animated.div style={props}>
      <button
        className="creatix-btn circle"
        type="button"
        onClick={(e) => {
          set({
            from: { opacity: 1 },
            to: async (next) => {
              await next({ opacity: 0.5 });
              await next({ opacity: 1 });
            },
          });
          onClick(e);
        }}
      >
        {children}
      </button>
    </animated.div>
  );
};

export default CircleButton;
