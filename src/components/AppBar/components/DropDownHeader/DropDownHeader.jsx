/** @format */

import { PureComponent } from "react";
import { ReactComponent as Arrow } from "images/arrowUp.svg";
import { DropDownHeaderContainer } from "./DropDownHeader.styled";
export default class DropDownHeader extends PureComponent {
  render() {
    const { isOpen, chosenCurrencySymbol } = this.props;
    return (
      <DropDownHeaderContainer>
        <p>{chosenCurrencySymbol}</p>
        <Arrow
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </DropDownHeaderContainer>
    );
  }
}
