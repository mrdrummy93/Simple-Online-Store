import React from 'react';
import { connect } from 'react-redux';
import SizeProductButton from '../styled/SizeProductButton';
import CartLeftColumn from '../styled/CartLeftColumn';
import CartCounterButton from '../styled/CartCounterButton';
import CartItemLine from '../styled/CartItemLine';
import CartItemWrapper from '../styled/CartItemWrapper';
import CartItemName from '../styled/CartItemName';
import CartItemPrice from '../styled/CartItemPrice';
import CartRightColumn from '../styled/CartRightColumn';
import CartCounterWrapper from '../styled/CartCounterWrapper';
import { CURRENCY_SIGNS } from '../constants';
import ImgInCartWrapper from '../styled/ImgInCartWrapper';
import { changeCount } from '../store/actions';

class CartItemComponent extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = product.activeAttributes;
  }

  handleCount = (value) => () => {
    const { handleChangeCount, index } = this.props;
    handleChangeCount(index, value);
  }

  handleClick = (id, val) => () => {
    this.setState({
      [id]: val,
    });
  }

  render() {
    const { product, currency } = this.props;
    const { amount } = product.prices.find((price) => price.currency === currency);
    console.log(product);

    return (
      <>
        <CartItemLine />
        <CartItemWrapper>
          <CartLeftColumn>
            <CartItemName>
              {product.name}
            </CartItemName>
            <CartItemPrice>
              {`${CURRENCY_SIGNS[currency]} ${amount}`}
            </CartItemPrice>
            {product.attributes.map((attribute) => (
              <div key={attribute.id}>
                <h4 style={{ margin: '10px 0px 35px' }}>
                  {attribute.name}
                  :
                </h4>
                <div
                  style={{
                    marginTop: '-30px',
                  }}
                >
                  {attribute.items.map((attributeItem) => {
                    const { state } = this;
                    const isCurrentAttributeActive = state[attribute.id] === attributeItem.value;
                    return (attribute.id === 'Color'
                      ? (
                        <SizeProductButton
                          key={attributeItem.id}
                          style={{
                            backgroundColor: attributeItem.value,
                            outline: isCurrentAttributeActive ? '3px solid black' : '1px solid black',
                            opacity: isCurrentAttributeActive ? '1' : '0.5',
                          }}
                          onClick={this.handleClick(attribute.id, attributeItem.value)}
                        />
                      )
                      : (
                        <SizeProductButton
                          key={attributeItem.id}
                          style={{
                            backgroundColor: isCurrentAttributeActive ? 'black' : 'white',
                            color: !isCurrentAttributeActive ? 'black' : 'white',
                          }}
                          onClick={this.handleClick(attribute.id, attributeItem.value)}
                        >
                          {attributeItem.value}
                        </SizeProductButton>
                      ));
                  })}
                </div>
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
              <p style={{ textAlign: 'center' }}>
                {product.count}
              </p>
              <CartCounterButton
                onClick={this.handleCount(-1)}
              >
                -
              </CartCounterButton>
            </CartCounterWrapper>
            <ImgInCartWrapper
              src={product.gallery[0]}
              alt="product"
            />
          </CartRightColumn>
        </CartItemWrapper>
        <CartItemLine />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.data.currency,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeCount: (index, value) => dispatch(changeCount(index, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemComponent);
