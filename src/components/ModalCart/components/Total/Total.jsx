/** @format */
import findTotalAmount from "helpers/findTotalAmount";
import { PureComponent } from "react";

import {
  TotalContainer,
  TotalAmount,
  TotalText,
  Symbol,
  CartBtn,
  ButtonContainer,
  NavLink,
} from "./Total.styled";

export default class Total extends PureComponent {
  render() {
    const { symbol, cart, currency, onClick } = this.props;
    return (
      <>
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalAmount>
            <Symbol>{symbol}</Symbol>
            {findTotalAmount(cart, currency)}
          </TotalAmount>
        </TotalContainer>

        <ButtonContainer>
          <NavLink to="cart" onClick={onClick}>
            <CartBtn>View Bag</CartBtn>
          </NavLink>
          <CartBtn checkOutBtn={true}>Check Out</CartBtn>
        </ButtonContainer>
      </>
    );
  }
}
