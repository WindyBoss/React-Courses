/** @format */

import { PureComponent } from "react";
import {
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencySymbol,
} from "./CurrencyContainer.styled";

export default class CurrencyContainer extends PureComponent {
  render() {
    const { currencies, onClick } = this.props;
    return (
      <>
        <DropDownListContainer>
          <DropDownList>
            {currencies.map((currency) => {
              return (
                <ListItem
                  key={currency.label}
                  value={currency.label}
                  onClick={() => onClick(currency)}
                >
                  <CurrencySymbol>{currency.symbol}</CurrencySymbol>
                  {currency.label}
                </ListItem>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      </>
    );
  }
}