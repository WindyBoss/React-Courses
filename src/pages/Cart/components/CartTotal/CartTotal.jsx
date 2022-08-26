/** @format */

import findTotalAmount from "helpers/findTotalAmount";
import { PureComponent } from "react";

import {
  TotalContainer,
  TotalEl,
  TotalAmount,
  Symbol,
} from "./CartTotal.styled";

export default class CartTotal extends PureComponent {
  render() {
    const { symbol, cart, currency } = this.props;
    return (
      <div>
        <TotalContainer>
          <TotalEl>
            Tax 21%
            <TotalAmount>
              <Symbol>{symbol}</Symbol>
              {Math.round(findTotalAmount(cart, currency) * 0.21 * 100) / 100}
            </TotalAmount>
          </TotalEl>
          <TotalEl>
            Quantity
            <TotalAmount>
              {cart.reduce((acc, item) => acc + item.amount, 0)}
            </TotalAmount>
          </TotalEl>
          <TotalEl>
            Total
            <TotalAmount>
              <Symbol> {symbol}</Symbol>
              {findTotalAmount(cart, currency)}
            </TotalAmount>
          </TotalEl>
        </TotalContainer>
      </div>
    );
  }
}
