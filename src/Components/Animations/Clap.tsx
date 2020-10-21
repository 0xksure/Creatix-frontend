import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  clapFeedback: () => void;
  isClapped: boolean;
}

const colorVariations = ['rgba(10, 20, 200, 1)', 'rgba(10, 200, 200, 1)'];

const ClapAnimation: React.FC<Props> = ({ children, clapFeedback, isClapped }) => {
  const [props] = useSpring(() => ({
    from: { fill: colorVariations[isClapped ? 1 : 0] },
    to: (next) => {
      next({ fill: colorVariations[1 % 2] });
    },
  }));
  console.log('isClapped: ', isClapped);
  return (
    <animated.div
      style={props}
      className="clap icon-center padding-right-s"
      onClick={() => {
        clapFeedback();
      }}
    >
      {children}
    </animated.div>
  );
};
export default ClapAnimation;
