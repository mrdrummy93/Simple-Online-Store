import React, { Component } from 'react';
import AddToCartButtonInProduct from '../styled/AddToCartButtonInProduct';

export default class AddToCartButton extends Component {
  render() {
    const { addToCartHandler, inStock } = this.props;
    const onClick = inStock ? addToCartHandler : null;
    return (
      <AddToCartButtonInProduct onClick={onClick}>
        {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
      </AddToCartButtonInProduct>
    );
  }
}
