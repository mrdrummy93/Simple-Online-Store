import React from 'react';
import { connect } from 'react-redux';
import CartItemComponent from '../CartItemComponent/CartItemComponent';
import { getAmountCurrentCurrency } from '../../helpers';
import HorizontalLineCartPage from './style/HorizontalLineCartPage';

class CartPage extends React.Component {
  render() {
    const { cart, currency } = this.props;
    const total = cart.reduce((acc, product) => {
      const amount = getAmountCurrentCurrency(product.prices, currency);
      return acc + amount * product.count;
    }, 0);
    return (
      <div>
        <h1>
          CART
        </h1>
        {cart.map((product, index) => (
          <div key={product.uniqId}>
            <CartItemComponent product={product} index={index} />
            <HorizontalLineCartPage />
          </div>
        ))}
        <h2>
          Total
          {` ${currency.symbol} ${total.toFixed(2)}`}
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
