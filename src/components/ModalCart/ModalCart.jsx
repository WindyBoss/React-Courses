/** @format */
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, productChange } from 'redux/cart/cartSlice';

import Modal from './components/Modal';
import Total from './components/Total';
import Product from '../Product';

import { ProductList, CartTitle } from './ModalCart.styled';
import { getCurrency } from 'redux/currency/currencySelectors';
import { getCart } from 'redux/cart/cartSelectors';
class ModalCart extends PureComponent {
  state = {
    symbol: '',
  };

  findPrice(prices) {
    const { currency } = this.props;

    return prices.filter(price => {
      return price.currency.symbol === currency.symbol;
    })[0];
  }

  findTotalAmount() {
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

  render() {
    const {
      onClose,
      cart,
      addProduct,
      deleteProduct,
      currency,
      productChange,
    } = this.props;

    return (
      <Modal onClose={onClose}>
        <CartTitle>
          My Bag: {cart.reduce((acc, item) => acc + item.amount, 0)} items
        </CartTitle>
        <ProductList>
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
              />
            );
          })}
        </ProductList>
        <Total
          symbol={currency.symbol}
          onClick={onClose}
          cart={cart}
          currency={currency}
        />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  currency: getCurrency(state),
  cart: getCart(state),
});

const mapDispatchToProps = { addProduct, deleteProduct, productChange };

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
