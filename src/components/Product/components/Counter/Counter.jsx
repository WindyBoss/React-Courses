/** @format */

import { PureComponent } from "react";
import { QuantityBtn, CounterContainer } from "./Counter.styled";

export default class Counter extends PureComponent {
  render() {
    const { handleIncrement, handleDecrement, product, value, idx, size } =
      this.props;
    return (
      <CounterContainer size={size}>
        <QuantityBtn
          size={size}
          onClick={() => handleIncrement({ ...product, idx: idx })}
        >
          +
        </QuantityBtn>
        <p>{value}</p>
        <QuantityBtn
          size={size}
          onClick={() => handleDecrement({ ...product, idx: idx })}
        >
          -
        </QuantityBtn>
      </CounterContainer>
    );
  }
}
