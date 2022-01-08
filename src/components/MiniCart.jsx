import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MiniCartWrapper from '../styled/MiniCartWrapper';
import CartItemComponent from './CartItemComponent';
import { CURRENCY_SIGNS } from '../constants';
import MiniCartBodyWrapper from '../styled/MiniCartBodyWrapper';
import HorizontalLine from '../styled/HorizontalLine';
import MiniCartTotalsWrapper from '../styled/MiniCartTotalsWrapper';
import MiniCartFooterWrapper from '../styled/MiniCartFooterWrapper';
import MiniCartCheckoutButton from '../styled/MiniCartCheckoutButton';
import MiniCartToCartButton from '../styled/MiniCartToCartButton';

class MiniCart extends React.Component {
  render() {
    const { cart, currency, toggleShow } = this.props;
    const total = cart.reduce((acc, product) => {
      const { amount } = product.prices.find((price) => price.currency === currency);
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
            <>
              <CartItemComponent key={product.uniqId} index={index} product={product} />
              <HorizontalLine />
            </>
          ))}
        </MiniCartBodyWrapper>
        <MiniCartTotalsWrapper>
          <h2>Total</h2>
          <h2>{` ${CURRENCY_SIGNS[currency]} ${total.toFixed(2)}`}</h2>
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
