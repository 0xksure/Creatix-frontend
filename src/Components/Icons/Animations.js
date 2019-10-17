import React, { useRef } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import clamp from "lodash-es/clamp";
import swap from "lodash-move";

function rect() {
  return (
    <svg
      width="85"
      height="55"
      viewBox="0 0 80 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="15" fill="#F64C72" />
    </svg>
  );
}

function assignProps(order, down, originalIndex, curIndex, y) {
  return index => {
    const props =
      down && index === originalIndex
        ? {
            y: curIndex * 100 + y,
            scale: 1.1,
            zIndex: "1",
            shadow: 15,
            immediate: n => n === "y" || n === "zIndex"
          }
        : {
            y: order.indexOf(index) * 100,
            scale: 1,
            zIndex: "0",
            shadow: 0,
            immediate: false
          };
    return props;
  };
}

export default function FeedbackStacked() {
  const items = ["one", "two", "three"];
  const order = useRef(items.map((_, i) => i));
  const [springs, set] = useSprings(items.length, assignProps(order.current));
  const bind = useDrag(({ args: [originalIndex], down, delta: [, y] }) => {
    const currentIndex = order.current.indexOf(originalIndex);
    const currentRow = clamp(
      Math.round((currentIndex * 100 + y) / 2),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, currentIndex, currentRow);
    set(assignProps(newOrder, down, originalIndex, currentIndex, y));
    if (!down) order.current = newOrder;
  });
  return (
    <div style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(
              s => `rgba(0,0,0,0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            transform: interpolate(
              [y, scale],
              (yPos, s) => `translate3d(0,${yPos}px,0) scale(${s})`
            )
          }}
        >
          {items[i]}
        </animated.div>
      ))}
    </div>
  );
}
