import React from 'react';
import { connect } from 'react-redux';
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
import StyledNavLink from './style/StyledNavLink';

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
        <StyledNavLink
          to={`${PRODUCT_ROUTE_NAME}/${product.id}`}
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
        </StyledNavLink>
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
