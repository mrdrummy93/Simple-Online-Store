import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ImagesWrapper from './style/ImagesWrapper';
import ProductPageMainImgWrapper from './style/ProductPageMainImgWrapper';
import ProductPageWrapper from './style/ProductPageWrapper';
import { getDefaultAttributesValues, getUniqId } from '../../helpers';
import ProductPageMiniImages from './style/ProductPageMiniImages';
import ProductPageMainImg from './style/ProductPageMainImg';
import { addToCart } from '../../store/actions';
import { PRODUCT_REQUEST } from '../../queries/queries';
import { client } from '../../queries/client';
import Description from '../Description/Description';

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

  onMiniImageClick = (image) => () => {
    this.setState({
      currentImageSrc: image,
    });
  }

  render() {
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
    return (
      <ProductPageWrapper>

        <ImagesWrapper>
          {gallery.map((image) => (
            <ProductPageMiniImages
              onClick={this.onMiniImageClick(image)}
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

        <Description
          brand={brand}
          name={name}
          inStock={inStock}
          addToCartHandler={this.addToCartHandler}
          attributes={attributes}
          handleClick={this.handleClick}
          activeAttributes={activeAttributes}
          prices={prices}
          description={description}
        />

      </ProductPageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addToCart(product)),
});

export default connect(null, mapDispatchToProps)(withRouter(ProductPage));
