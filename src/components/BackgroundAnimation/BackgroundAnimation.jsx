import { useState, useLayoutEffect } from 'react';
import { animated, useTransition, useSpringRef } from 'react-spring';

import styles from './BackgroundAnimation.module.css';

export const slides = [
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
  'https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg',
  'https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg',
  'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
  'https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg',
];

export default function BackgroundAnimation() {
  const [index, setIndex] = useState(0);
  const springApi = useSpringRef();

  const transitions = useTransition(index, {
    from: { opacity: 0.3 },
    enter: { opacity: 0.6 },
    leave: { opacity: 0.3 },

    onRest: (_springs, _ctrl, item) => {
      if (index === item) {
        setIndex(index === slides.length - 1 ? 0 : index + 1);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 4000,
    },
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [index, springApi]);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return transitions((props, item) => {
    const { width, height } = getWindowDimensions();
    return (
      <div>
        <animated.div
          className={styles.container}
          style={{
            ...props,
            backgroundImage: `url(${
              slides[item]
            }?auto=compress&cs=tinysrgb&dpr=2&h=${height * 1.2}&w=${
              width * 1.2
            })`,
          }}
        />
      </div>
    );
  });
}
