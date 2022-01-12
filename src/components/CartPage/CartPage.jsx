import React from 'react';
import { connect } from 'react-redux';
import CartItemComponent from '../CartItemComponent/CartItemComponent';
import CartHeading from './style/CartHeading';
import { getAmountCurrentCurrency } from '../../helpers';
import HorizontalLine from '../MiniCart/style/HorizontalLine';

class CartPage extends React.Component {
  render() {
    const { cart, currency } = this.props;
    const total = cart.reduce((acc, product) => {
      const amount = getAmountCurrentCurrency(product.prices, currency);
      return acc + amount * product.count;
    }, 0);
    return (
      <div>
        <CartHeading>
          CART
        </CartHeading>
        {cart.map((product, index) => (
          <div key={product.uniqId}>
            <CartItemComponent product={product} index={index} />
            <HorizontalLine />
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
