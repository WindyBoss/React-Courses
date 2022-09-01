/** @format */

import { Component } from 'react';

import { connect } from 'react-redux';
import { addProduct, deleteProduct, productChange } from 'redux/cart/cartSlice';

import Product from 'components/Product';
import MainContainer from 'components/MainContainer';

import { CartTitle } from './Cart.styled';
import CartTotal from './components/CartTotal';
import { getCart } from 'redux/cart/cartSelectors';
import { getCurrency } from 'redux/currency/currencySelectors';

class Cart extends Component {
  countTotal() {
    const { cart } = this.props;
    return (
      Math.round(
        cart.reduce(
          (acc, item) => acc + this.findPrice(item.prices).amount * item.amount,
          0
        ) * 100
      ) / 100
    );
  }

  findPrice(prices) {
    const { currency } = this.props;

    return prices.filter(price => {
      return price.currency.symbol === currency.symbol;
    })[0];
  }

  filterAttributions(item, attribute, chosenAttributes) {
    return chosenAttributes.filter(
      attr => attr.value === item.value && attr.name === attribute.name
    );
  }

  setChosenAttributes(item, attribute) {
    return [
      {
        name: attribute.name,
        value: item.value,
      },
    ];
  }

  render() {
    const { cart, productChange, addProduct, deleteProduct, currency } =
      this.props;
    return (
      <MainContainer>
        <CartTitle>Cart</CartTitle>
        <ul>
          {cart.map((product, idx) => {
            return (
              <Product
                product={product}
                idx={idx}
                productChange={productChange}
                handleDecrement={deleteProduct}
                handleIncrement={addProduct}
                currency={currency}
                key={product.attId}
                size="large"
                mainCart={true}
              />
            );
          })}
        </ul>
        <CartTotal symbol={currency.symbol} cart={cart} currency={currency} />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  currency: getCurrency(state),
  cart: getCart(state),
});

const mapDispatchToProps = { addProduct, deleteProduct, productChange };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
