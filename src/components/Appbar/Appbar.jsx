/** @format */
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { getAllCategories } from 'service/apolloClient';

import { setCurrency } from 'redux/currency/currencySlice';
import { connect } from 'react-redux';

import MainHeader from './components/MainHeader';

import ErrorBoundary from 'components/ErrorBoundary';
import { getCurrency } from 'redux/currency/currencySelectors';
import { getCart } from 'redux/cart/cartSelectors';

class AppBar extends Component {
  state = {
    categories: [],
    currencies: [],
    isOpen: false,
    chosenCurrency: this.props.currency,
    cartShown: false,
    error: false,
  };

  async componentDidMount() {
    const { categories, currencies } = await getAllCategories();

    categories && currencies
      ? this.setState({
          categories: categories,
          currencies: currencies,
        })
      : this.setState({ error: true });
  }

  componentDidUpdate(prevProps) {
    const currentCurrency = this.props.currency;
    const prevCurrency = prevProps.currency;

    if (prevCurrency.symbol !== currentCurrency.symbol) {
      this.setState({ chosenCurrency: currentCurrency });
    }
  }

  toggleCurrency() {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  }

  toggleCart() {
    const { cartShown } = this.state;
    this.setState(prevState => {
      return { cartShown: !prevState.cartShown, isOpen: cartShown && false };
    });
  }

  chooseCurrency(currency) {
    this.setState({ chosenCurrency: currency });
  }

  render() {
    const { categories, currencies, isOpen, chosenCurrency, cartShown, error } =
      this.state;
    const { setCurrency, cart } = this.props;
    const itemAmount = cart.reduce((acc, item) => acc + item.amount, 0);

    return (
      <div>
        <MainHeader
          categories={categories}
          isOpen={isOpen}
          currencySymbol={chosenCurrency.symbol}
          toggleCart={this.toggleCart.bind(this)}
          cartShown={cartShown}
          currencies={currencies}
          setCurrency={setCurrency}
          toggleCurrency={this.toggleCurrency.bind(this)}
          itemAmount={itemAmount}
        />
        <Outlet />
        {error && <ErrorBoundary />}
      </div>
    );
  }
}

/*
^ For connection the redux store with class component is necessary to use the next methods:
- mapStateToProps => connect component with state
- mapDispatchToProps => connect to connect component with methods
- connect => connect component with mapStateToProps/mapDispatchToProps
*/

const mapStateToProps = state => ({
  currency: getCurrency(state),
  cart: getCart(state),
});

const mapDispatchToProps = { setCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
