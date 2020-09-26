import React, { useRef } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash-es/clamp';
import swap from 'lodash-move';

import AssignProps from 'Utils/AssignProps';

const FeedbackStacked: React.FC = () => {
  const items = ['one', 'two', 'three'];
  const order = useRef(items.map((_, i) => i));
  const [springs, set] = useSprings(items.length, AssignProps(order.current));
  const bind = useDrag(({ args: [originalIndex], down, delta: [, y] }) => {
    const currentIndex = order.current.indexOf(originalIndex);
    const currentRow = clamp(Math.round((currentIndex * 100 + y) / 2), 0, items.length - 1);
    const newOrder = swap(order.current, currentIndex, currentRow);
    set(AssignProps(newOrder, down, originalIndex, currentIndex, y));
    if (!down) order.current = newOrder;
  });
  return (
    <div style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          key={i}
          {...bind(i)}
          style={{
            zIndex,
            boxShadow: shadow.interpolate((s) => `rgba(0,0,0,0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: interpolate(
              [y, scale],
              (yPos, s) => `translate3d(0,${yPos}px,0) scale(${s})`,
            ),
          }}
        >
          {items[i]}
        </animated.div>
      ))}
    </div>
  );
};

export default FeedbackStacked;
