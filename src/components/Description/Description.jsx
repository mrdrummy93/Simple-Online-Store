import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import { getAmountCurrentCurrency } from '../../helpers';
import DescriptionWrapperStyled from './styled/DescriptionWrapperStyled';
import AddToCartButton from './components/AddToCartButton';
import Attribute from './components/Attribute';
import { Brand, Name } from './styled/BrandName';
import AttributeName from './styled/AttributeName';

class Description extends Component {
  renderPrice() {
    const { prices, currency, isInCart } = this.props;
    const amount = getAmountCurrentCurrency(prices, currency);
    return (
      <div>
        {!isInCart && <AttributeName>PRICE:</AttributeName>}
        <AttributeName>{`${currency.symbol} ${amount}`}</AttributeName>
      </div>
    );
  }

  renderBottomPart() {
    const { inStock, addToCartHandler, description } = this.props;
    const html = sanitizeHtml(description);
    return (
      <>
        {this.renderPrice()}

        <AddToCartButton inStock={inStock} addToCartHandler={addToCartHandler} />

        <div>
          {ReactHtmlParser(html)}
        </div>
      </>
    );
  }

  render() {
    const {
      brand,
      name,
      attributes,
      activeAttributes,
      handleClick,
      isInCart = false,
    } = this.props;
    return (
      <DescriptionWrapperStyled>

        <Brand>{brand}</Brand>

        <Name>{name}</Name>

        {isInCart && this.renderPrice()}

        {
          attributes.map((attribute) => (
            <Attribute
              activeAttributes={activeAttributes}
              handleClick={handleClick}
              attribute={attribute}
              key={attribute.id}
            />
          ))
        }

        {!isInCart && this.renderBottomPart()}

      </DescriptionWrapperStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.data.currency,
});

export default connect(mapStateToProps, null)(Description);
