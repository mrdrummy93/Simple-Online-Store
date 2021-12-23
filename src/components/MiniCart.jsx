import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MiniCartWrapper from '../styled/MiniCartWrapper';
import CartItemComponent from './CartItemComponent';

class MiniCart extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <MiniCartWrapper>
        <p>
          <strong>My bag.</strong>
          {' '}
          {cart.length}
          {' '}
          items
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cart.map((product, index) => (
            <>
              <CartItemComponent key={product.uniqId} index={index} product={product} />
              <hr style={{
                color: 'black',
                width: '330px',
              }}
              />
            </>
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
        >
          <NavLink to="/cart">
            <button
              style={{
                width: '140px',
                height: '45px',
                backgroundColor: 'white',
                border: '1px solid black',
                cursor: 'pointer',
              }}
              type="button"
            >
              VIEW BAG
            </button>
          </NavLink>
          <button
            style={{
              width: '140px',
              height: '45px',
              backgroundColor: '#5ECE7B',
              color: 'white',
              border: 'none',
            }}
            type="button"
          >
            CHECKOUT
          </button>
        </div>
      </MiniCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(MiniCart);
