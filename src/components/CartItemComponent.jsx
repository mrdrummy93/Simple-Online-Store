import React from 'react';
import { connect } from 'react-redux';
import SizeProductButton from '../styled/SizeProductButton';
import CartLeftColumn from '../styled/CartLeftColumn';
import CartCounterButton from '../styled/CartCounterButton';
import CartItemWrapper from '../styled/CartItemWrapper';
import CartItemPrice from '../styled/CartItemPrice';
import CartRightColumn from '../styled/CartRightColumn';
import CartCounterWrapper from '../styled/CartCounterWrapper';
import { CURRENCY_SIGNS } from '../constants';
import ImgInCartWrapper from '../styled/ImgInCartWrapper';
import { changeActiveAttributes, changeCount } from '../store/actions';
import FirstHeading from '../styled/FirstHeading';
import SecondHeading from '../styled/SecondHeading';
import FourthHeading from '../styled/FourthHeading';
import AttributesButtonsWrapper from '../styled/AttributesButtonsWrapper';
import CartProductCounter from '../styled/CartProductCounter';
import ColorProductButton from '../styled/ColorProductButton';
import { CartPhotoSliderLeft, CartPhotoSliderRight } from '../styled/CartPhotoSlider';
import leftArrow from '../assets/iconMonster-arrow-left-circle-thin.svg';
import rightArrow from '../assets/iconMonster-arrow-right-circle-thin.svg';

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
    const { handleChangeActiveAttributes, index } = this.props;
    const {
      currentImageIndex,
      ...activeAttributes
    } = this.state;
    handleChangeActiveAttributes(index, { ...activeAttributes, [id]: val });
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
    const { product, currency } = this.props;
    const { currentImageIndex } = this.state;
    const { amount } = product.prices.find((price) => price.currency === currency);
    const { activeAttributes } = product;

    return (
      <CartItemWrapper>
        <CartLeftColumn>
          <FirstHeading>
            {product.brand}
          </FirstHeading>
          <SecondHeading>
            {product.name}
          </SecondHeading>
          <CartItemPrice>
            {`${CURRENCY_SIGNS[currency]} ${amount}`}
          </CartItemPrice>
          {product.attributes.map((attribute) => (
            <div key={attribute.id}>
              <FourthHeading>
                {attribute.name}
                :
              </FourthHeading>
              <AttributesButtonsWrapper>
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
              </AttributesButtonsWrapper>
            </div>
          ))}
        </CartLeftColumn>
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
          <div style={{ position: 'relative' }}>
            <ImgInCartWrapper
              src={product.gallery[currentImageIndex]}
              alt="product"
            />
            <CartPhotoSliderLeft
              onClick={this.changeCurrentImageIndex(-1)}
              type="button"
            >
              <img src={leftArrow} alt="leftArrow" style={{ cursor: 'pointer' }} />
            </CartPhotoSliderLeft>
            <CartPhotoSliderRight
              onClick={this.changeCurrentImageIndex(1)}
              type="button"
            >
              <img src={rightArrow} alt="rightArrow" style={{ cursor: 'pointer' }} />
            </CartPhotoSliderRight>
          </div>
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
