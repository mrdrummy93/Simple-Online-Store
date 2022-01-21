import React from 'react';
import { connect } from 'react-redux';
import CartCounterButton from './style/CartCounterButton';
import CartItemWrapper from './style/CartItemWrapper';
import CartRightColumn from './style/CartRightColumn';
import CartCounterWrapper from './style/CartCounterWrapper';
import ImgInCart from './style/ImgInCart';
import { changeActiveAttributes, changeCount } from '../../store/actions';
import CartProductCounter from './style/CartProductCounter';
import { CartPhotoSliderLeft, CartPhotoSliderRight } from './style/CartPhotoSlider';
import { CartPhotoSliderLeftArrow, CartPhotoSliderRightArrow } from './style/CartPhotoSliderArrows';
import ImgInCartWrapper from './style/ImgInCartWrapper';
import Description from '../Description/Description';

class CartItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  handleCount = (value) => () => {
    const { handleChangeCount, index } = this.props;
    handleChangeCount(index, value);
  }

  handleClick = (id, val) => () => {
    const { handleChangeActiveAttributes, index, product } = this.props;
    handleChangeActiveAttributes(index, { ...product.activeAttributes, [id]: val });
  }

  changeCurrentImageIndex = (value) => () => {
    const { currentImageIndex } = this.state;
    const { product: { gallery } } = this.props;
    if (value === 1 && currentImageIndex === gallery.length - 1) {
      return this.setState({
        currentImageIndex: 0,
      });
    }
    if (value === -1 && !currentImageIndex) {
      return this.setState({
        currentImageIndex: gallery.length - 1,
      });
    }
    return this.setState({
      currentImageIndex: currentImageIndex + value,
    });
  };

  render() {
    const { product } = this.props;
    const { currentImageIndex } = this.state;
    const {
      prices,
      gallery,
      inStock,
      name,
      brand,
      attributes,
      description,
      activeAttributes,
    } = product;

    const arrows = gallery.length > 1 ? (
      <>
        <CartPhotoSliderLeft
          onClick={this.changeCurrentImageIndex(-1)}
          type="button"
        >
          <CartPhotoSliderLeftArrow />
        </CartPhotoSliderLeft>
        <CartPhotoSliderRight
          onClick={this.changeCurrentImageIndex(1)}
          type="button"
        >
          <CartPhotoSliderRightArrow />
        </CartPhotoSliderRight>
      </>
    ) : null;

    return (
      <CartItemWrapper>

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
          isInCart
        />

        <CartRightColumn>

          <CartCounterWrapper>

            <CartCounterButton
              onClick={this.handleCount(1)}
            >
              +
            </CartCounterButton>

            <CartProductCounter>
              {product.count}
            </CartProductCounter>

            <CartCounterButton
              onClick={this.handleCount(-1)}
            >
              -
            </CartCounterButton>

          </CartCounterWrapper>

          <ImgInCartWrapper>

            <ImgInCart
              src={product.gallery[currentImageIndex]}
              alt="product"
            />
            {arrows}

          </ImgInCartWrapper>
        </CartRightColumn>

      </CartItemWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.data.currency,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeCount: (index, value) => dispatch(changeCount(index, value)),
  handleChangeActiveAttributes: (index, activeAttributes) => dispatch(changeActiveAttributes(index, activeAttributes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemComponent);
