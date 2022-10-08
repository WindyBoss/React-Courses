import styled from './CustomizedAxisTick.module.css';

export default function CustomizedAxisTick({ x, y, payload, option }) {

  function getTick() {
    return option === 'daily'
      ? payload.value.slice(0, 10)
      : payload.value.slice(10);
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={20}
        textAnchor="end"
        fill='#000000'
        transform="rotate(0)"
        className={styled.tick}
      >
        {payload.value.length && getTick()}
      </text>
    </g>
  );
}
