/** @format */

import { PureComponent } from "react";
import {
  DropDownContainer,
  Switcher,
  SwitcherContainer,
} from "./CurrencySwitcher.styled";

import CurrencyContainer from "../CurrencyContainer";
import DropDownHeader from "../DropDownHeader";

export default class CurrencySwitcher extends PureComponent {
  render() {
    const { onClick, isOpen, currencySymbol, currencies, setCurrency } =
      this.props;
    return (
      <SwitcherContainer>
        <Switcher onClick={() => onClick()}>
          <DropDownContainer>
            <DropDownHeader
              isOpen={isOpen}
              chosenCurrencySymbol={currencySymbol}
            />
            {isOpen && (
              <CurrencyContainer
                currencies={currencies}
                onClick={setCurrency}
              />
            )}
          </DropDownContainer>
        </Switcher>
      </SwitcherContainer>
    );
  }
}
