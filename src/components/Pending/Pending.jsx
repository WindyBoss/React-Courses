import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { animated, useSpring } from 'react-spring';

import style from './Pending.module.css';

export default function Pending() {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 200,
    },
  });

  return (
    <animated.div className={style.pendingContainer} style={styles}>
      <ThreeCircles
        ariaLabel="loading-indicator"
        outerCircleColor="#000000"
        middleCircleColor="#4B7BE5"
        innerCircleColor="#5534A5"
        height={500}
        width={500}
      />
    </animated.div>
  );
}
