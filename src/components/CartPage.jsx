import React from 'react';
import { connect } from 'react-redux';
import CartItemComponent from './CartItemComponent';

class CartPage extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <h1 style={{ paddingBottom: '70px' }}>
          CART
        </h1>
        {cart.map(() => <CartItemComponent />)}
        <h2>Total 100$</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartPage);
