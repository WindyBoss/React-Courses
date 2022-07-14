import React, { useState, useEffect, useRef } from 'react';
import { Clocki } from './components/Clocki';

export function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
      console.log('This is interval for every second');

    }, 1000);


    return () => {
      console.log('This before every useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  }

  return (
    <><Clocki time={time} text='Current Time By Hooks' onClick={stop}/></>
  );
};