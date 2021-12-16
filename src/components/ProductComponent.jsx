import React from 'react';
import { connect } from 'react-redux';
import product from '../assets/product.png';
import { CURRENCY_SIGNS } from '../constants';
import { ADD_TO_CART } from '../store/actionsType';
import AddToCartButton from '../styled/AddToCartButton';
import ProductComponentWrapper from '../styled/ProductComponentWrapper';
import addToCartLogo from '../assets/addToCartLogo.svg';

class ProductComponent extends React.Component {
  handleClick = () => {
    const { addToCart, id } = this.props;
    addToCart({ id });
  }

  render() {
    const { item, currency } = this.props;
    const { amount } = item.prices.find((price) => price.currency === currency);
    // eslint-disable-next-line no-return-assign
    console.log(item);
    return (
      <ProductComponentWrapper>
        <img
          src={item.gallery[0]}
          alt="product"
          style={{
            width: '350px',
            height: '330px',
            objectFit: 'contain',
          }}
        />
        <p style={{
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '18px',
          lineHeight: '160%',
        }}
        >
          {item.name}
        </p>
        <p style={{
          fontWeight: '500',
          fontStyle: 'normal',
          fontSize: '18px',
          lineHeight: '160%',
        }}
        >
          {`${CURRENCY_SIGNS[currency]} ${amount}`}
        </p>
        {item.inStock && (
          <AddToCartButton
            onClick={this.handleClick}
            type="button"
          >
            <img src={addToCartLogo} alt="logo" />
          </AddToCartButton>
        )}
        {!item.inStock && (
          <div
            style={{
              backgroundColor: 'white',
              opacity: '0.5',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '0',
              left: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            OUT OF STOCK
          </div>
        )}
      </ProductComponentWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: () => dispatch({ type: ADD_TO_CART, payload: { product } }),
});

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
