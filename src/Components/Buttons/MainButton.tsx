import React from 'react';
import { useSpring, animated } from 'react-spring';

enum size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface Props {
  id: string;
  size: size | '';
  round: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  modalIsOpen?: boolean;
  buttonType?: 'primary' | 'secondary';
  type: 'reset' | 'button' | 'submit' | undefined;
  disabled: boolean;
}

const MainButton: React.FC<Props> = ({
  id = 'undefined',
  size = '',
  round = '',
  children,
  buttonType = 'primary',
  onClick,
  modalIsOpen = false,
  type,
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
        className={`creatix-btn ${buttonType} ${size} ${round} `}
        onClick={(e) => onClick(e)}
        type={type}
        disabled={disabled}
      >
        <div className="h4 medium-font small margin-zero">{children}</div>
      </button>
    </animated.div>
  );
};

export default MainButton;
