import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import AddToCartButtonInProduct from '../styled/AddToCartButtonInProduct';
import DescriptionWrapper from '../styled/DescriptionWrapper';
import ImagesWrapper from '../styled/ImagesWrapper';
import ProductPageMainImgWrapper from '../styled/ProductPageMainImgWrapper';
import ProductPageWrapper from '../styled/ProductPageWrapper';
import SizeProductButton from '../styled/SizeProductButton';
import { CURRENCY_SIGNS } from '../constants';
import { getDefaultAttributesValues, getUniqId } from '../helpers';
import ProductPageMiniImages from '../styled/ProductPageMiniImages';
import ProductPageMainImg from '../styled/ProductPageMainImg';
import { addToCart } from '../store/actions';
import { PRODUCT_REQUEST } from '../queries/queries';
import { client } from '../queries/client';
import ColorProductButton from '../styled/ColorProductButton';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.queryProductId();
  }

  queryProductId = () => {
    const {
      match: {
        params: {
          productId,
        },
      },
    } = this.props;
    client.query({
      query: PRODUCT_REQUEST,
      variables: { productId },
    }).then(({ data: { product } }) => {
      this.setState({
        ...product,
        activeAttributes: getDefaultAttributesValues(product),
        currentImageSrc: product.gallery[0],
      });
      // eslint-disable-next-line no-console
    }).catch((e) => console.log(e));
  }

  handleClick = (id, val) => () => {
    this.setState((prevState) => ({
      activeAttributes: {
        ...prevState.activeAttributes,
        [id]: val,
      },
    }));
  }

  addToCartHandler = () => {
    const {
      currentImageSrc,
      ...product
    } = this.state;
    const { addProductToCart } = this.props;
    addProductToCart({
      ...product,
      uniqId: getUniqId(this.state),
    });
  }

  render() {
    const {
      currency,
    } = this.props;
    const {
      prices,
      gallery,
      inStock,
      name,
      brand,
      attributes,
      description,
      activeAttributes,
      currentImageSrc,
    } = this.state;
    if (!name) return null;
    const { amount } = prices.find((price) => price.currency === currency);
    const html = sanitizeHtml(description);
    return (
      <ProductPageWrapper>
        <ImagesWrapper>
          {gallery.map((image) => (
            <ProductPageMiniImages
              onClick={() => {
                this.setState({
                  currentImageSrc: image,
                });
              }}
              src={image}
              key={image}
              alt="product"
            />
          ))}
        </ImagesWrapper>
        <ProductPageMainImgWrapper>
          <ProductPageMainImg
            src={currentImageSrc}
            alt="product"
          />
        </ProductPageMainImgWrapper>
        <DescriptionWrapper>
          <h1>
            {brand}
          </h1>
          <h2>
            {name}
          </h2>
          {attributes.map((attribute) => (
            <div key={attribute.id}>
              <h4>
                {attribute.name}
                :
              </h4>
              <div>
                {attribute.items.map((attributeItem) => {
                  const isCurrentAttributeActive = activeAttributes[attribute.id] === attributeItem.value;
                  return (attribute.id === 'Color'
                    ? (
                      <ColorProductButton
                        key={attributeItem.id}
                        attributeItem={attributeItem.value}
                        isCurrentAttributeActive={isCurrentAttributeActive}
                        onClick={this.handleClick(attribute.id, attributeItem.value)}
                      />
                    )
                    : (
                      <SizeProductButton
                        key={attributeItem.id}
                        isCurrentAttributeActive={isCurrentAttributeActive}
                        onClick={this.handleClick(attribute.id, attributeItem.value)}
                      >
                        {attributeItem.value}
                      </SizeProductButton>
                    ));
                })}
              </div>
            </div>
          ))}
          <div>
            <h4>PRICE:</h4>
            <p><strong>{`${CURRENCY_SIGNS[currency]} ${amount}`}</strong></p>
          </div>
          {inStock
            ? (
              <AddToCartButtonInProduct
                onClick={this.addToCartHandler}
              >
                ADD TO CART
              </AddToCartButtonInProduct>
            )
            : (
              <AddToCartButtonInProduct>
                OUT OF STOCK
              </AddToCartButtonInProduct>
            )}
          {/* eslint-disable-next-line react/no-danger */}
          <div>
            {ReactHtmlParser(html)}
          </div>
        </DescriptionWrapper>
      </ProductPageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.data.currency,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));
