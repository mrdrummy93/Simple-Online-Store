import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE_NAME } from '../../routeNames';
import AddToCartButton from './style/AddToCartButton';
import ProductComponentWrapper from './style/ProductComponentWrapper';
import addToCartLogo from '../../assets/addToCartLogo.svg';
import ProductComponentImg from './style/ProductComponentImg';
import ProductComponentName from './style/ProductComponentName';
import ProductComponentPrice from './style/ProductComponentPrice';
import OutOfStockWrapper from './style/OutOfStockWrapper';
import { addToCart } from '../../store/actions';
import { getDefaultAttributesValues, getUniqId, getAmountCurrentCurrency } from '../../helpers';

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
    const amount = getAmountCurrentCurrency(product.prices, currency);
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
            {`${product.brand} ${product.name}`}
          </ProductComponentName>
          <ProductComponentPrice>
            {`${currency.symbol} ${amount}`}
          </ProductComponentPrice>
          {!product.inStock && (
            <OutOfStockWrapper>
              OUT OF STOCK
            </OutOfStockWrapper>
          )}
        </NavLink>
        {product.inStock && (
          <AddToCartButton
            onClick={this.addToCartHandler}
            type="button"
          >
            <img src={addToCartLogo} alt="logo" />
          </AddToCartButton>
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
