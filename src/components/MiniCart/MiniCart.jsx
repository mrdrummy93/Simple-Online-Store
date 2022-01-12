import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MiniCartWrapper from './style/MiniCartWrapper';
import CartItemComponent from '../CartItemComponent/CartItemComponent';
import MiniCartBodyWrapper from './style/MiniCartBodyWrapper';
import HorizontalLine from './style/HorizontalLine';
import MiniCartTotalsWrapper from './style/MiniCartTotalsWrapper';
import MiniCartFooterWrapper from './style/MiniCartFooterWrapper';
import MiniCartCheckoutButton from './style/MiniCartCheckoutButton';
import MiniCartToCartButton from './style/MiniCartToCartButton';
import { getAmountCurrentCurrency } from '../../helpers';

class MiniCart extends React.Component {
  render() {
    const { cart, currency, toggleShow } = this.props;
    const total = cart.reduce((acc, product) => {
      const amount = getAmountCurrentCurrency(product.prices, currency);
      return acc + amount * product.count;
    }, 0);
    return (
      <MiniCartWrapper>
        <p>
          <strong>My bag.</strong>
          {' '}
          {cart.length}
          {' '}
          items
        </p>
        <MiniCartBodyWrapper>
          {cart.map((product, index) => (
            <div key={product.uniqId} style={{ display: 'flex', flexDirection: 'column' }}>
              <CartItemComponent index={index} product={product} />
              <HorizontalLine />
            </div>
          ))}
        </MiniCartBodyWrapper>
        <MiniCartTotalsWrapper>
          <h2>Total</h2>
          <h2>{` ${currency.symbol} ${total.toFixed(2)}`}</h2>
        </MiniCartTotalsWrapper>
        <MiniCartFooterWrapper>
          <NavLink to="/cart">
            <MiniCartToCartButton
              type="button"
              onClick={toggleShow}
            >
              VIEW BAG
            </MiniCartToCartButton>
          </NavLink>
          <MiniCartCheckoutButton
            type="button"
          >
            CHECKOUT
          </MiniCartCheckoutButton>
        </MiniCartFooterWrapper>
      </MiniCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.data.currency,
});

export default connect(mapStateToProps)(MiniCart);
