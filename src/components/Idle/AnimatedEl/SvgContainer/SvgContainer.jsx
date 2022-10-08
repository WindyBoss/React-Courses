import { useSpring, animated } from 'react-spring';

export default function SvgContainer({ icon }) {
  const styles = useSpring({
    config: {
      duration: 20000,
    },
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: -360 },
  });

  return (
    <animated.div
      style={{
        ...styles,
      }}
    >
      {icon}
    </animated.div>
  );
}
