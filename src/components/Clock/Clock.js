import { Component } from 'react';
import { ClockWrapper } from './Clock.styled';

/*

Below is written a clock, made in React JS.
If is neccessary to make a clock, which is updated regularly, it is neccessary to unmount it if the page is changed, for example dunring Ruotes
otherwise it will double every time, when the user come back to the page with clock

*/

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  // make interval function during Mount of element
  componentDidMount() {
    this.intervalId = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  };

  // Here is the function, which is used to unmount the clock
  componentWillUnmount() {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <ClockWrapper colors={this.props.colors}>
        <p>{this.state.time}</p>
      </ClockWrapper>
    );
  };
};
