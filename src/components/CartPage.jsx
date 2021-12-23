import React from 'react';
import { connect } from 'react-redux';
import CartItemComponent from './CartItemComponent';
import { CURRENCY_SIGNS } from '../constants';

class CartPage extends React.Component {
  render() {
    const { cart, currency } = this.props;
    const total = cart.reduce((acc, product) => {
      const { amount } = product.prices.find((price) => price.currency === currency);
      return acc + amount * product.count;
    }, 0);
    return (
      <div>
        <h1 style={{ paddingBottom: '70px' }}>
          CART
        </h1>
        {cart.map((product, index) => (
          <CartItemComponent product={product} index={index} key={product.uniqId} />
        ))}
        <h2>
          Total
          {` ${CURRENCY_SIGNS[currency]} ${total.toFixed(2)}`}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.data.currency,
});

export default connect(mapStateToProps)(CartPage);
