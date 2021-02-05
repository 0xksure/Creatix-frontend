import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  id: string;
  size: 'small' | 'medium' | 'large';
  round?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  modalIsOpen?: boolean;
  buttonType?: 'primary' | 'secondary';
  type: 'reset' | 'button' | 'submit' | undefined;
  color?: 'blue' | 'pink';
  disabled?: boolean;
}

const MainButton: React.FC<Props> = ({
  id = 'undefined',
  size = 'medium',
  round = false,
  children,
  buttonType = 'primary',
  onClick,
  modalIsOpen = false,
  type = 'button',
  color = 'blue',
  disabled = false,
}) => {
  const [props] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: modalIsOpen ? 0.1 : 1 },
  }));

  return (
    <animated.div style={props} className="">
      <button
        id={id}
        className={`creatix-btn ${buttonType} ${color} ${size} ${round ? 'round' : ''}`}
        onClick={(e) => {
          if (onClick) {
            return onClick(e);
          }
          return null;
        }}
        type={type}
        disabled={disabled}
      >
        <div className="h4 medium-font small margin-zero">{children}</div>
      </button>
    </animated.div>
  );
};

export default MainButton;
