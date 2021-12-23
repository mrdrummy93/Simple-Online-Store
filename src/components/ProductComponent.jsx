import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE_NAME } from '../routeNames';
import { CURRENCY_SIGNS } from '../constants';
import AddToCartButton from '../styled/AddToCartButton';
import ProductComponentWrapper from '../styled/ProductComponentWrapper';
import addToCartLogo from '../assets/addToCartLogo.svg';
import ProductComponentImg from '../styled/ProductComponentImg';
import ProductComponentName from '../styled/ProductComponentName';
import ProductComponentPrice from '../styled/ProductComponentPrice';
import OutOfStockWrapper from '../styled/OutOfStockWrapper';
import { addToCart } from '../store/actions';
import { getDefaultAttributesValues, getUniqId } from '../helpers';

class ProductComponent extends React.Component {
  addToCartHandler = () => {
    const {
      addProductToCart,
      product,
    } = this.props;
    const productWithActiveAttributes = {
      ...product,
      activeAttributes: getDefaultAttributesValues(product),
    };
    addProductToCart({
      ...productWithActiveAttributes,
      uniqId: getUniqId(productWithActiveAttributes),
    });
  }

  render() {
    const { product, currency } = this.props;
    const { amount } = product.prices.find((price) => price.currency === currency);
    // eslint-disable-next-line no-return-assign
    return (
      <ProductComponentWrapper>
        <NavLink
          to={`${PRODUCT_ROUTE_NAME}/${product.id}`}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <ProductComponentImg
            src={product.gallery[0]}
            alt="product"
          />
          <ProductComponentName>
            {product.name}
          </ProductComponentName>
          <ProductComponentPrice>
            {`${CURRENCY_SIGNS[currency]} ${amount}`}
          </ProductComponentPrice>
        </NavLink>
        {product.inStock && (
          <AddToCartButton
            onClick={this.addToCartHandler}
            type="button"
          >
            <img src={addToCartLogo} alt="logo" />
          </AddToCartButton>
        )}
        {!product.inStock && (
          <OutOfStockWrapper>
            OUT OF STOCK
          </OutOfStockWrapper>
        )}
      </ProductComponentWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addToCart(product)),
});

const mapStateToProps = (state) => ({
  currency: state.data.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
