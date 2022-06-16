import React, { Component, useState, useEffect, useRef } from 'react';
import { Clocki } from '../components/Clock/Clocki';

class ClockClass extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  };

  componentWillUnmount() {
    this.stop();
  };

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <><Clocki time={this.state.time} text='Current Time By Class' onClick={this.stop}/></>
    );
  };
};

function ClockHooks() {
  const [time, setTime] = useState(() => new Date());

  /*
  * useRef - is a hook, which helps to create a reference to an element, which will be hold in the memory (usually, it's a DOM element),
  * and can be used in other places, where it couldn't be used before
  */
  const intervalId = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
      console.log('This is interval for every second');
    }, 1000);

  /*
  * useEffect - here use effect is used as componentWillUnmount
  */
    return () => {
      console.log('This before every useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  }

  return (
    <><Clocki time={time} text='Current Time By Hooks' onClick={stop} refferer={buttonRef} /></>
  );
};

export function Clock() {
  return (
    <>
      <ClockHooks />
      <ClockClass />
    </>
  );
};
