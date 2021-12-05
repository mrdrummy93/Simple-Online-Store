import React from "react";
import product from '../assets/product.png';
import ProductComponentWrapper from "../styled/ProductComponentWrapper";

class ProductComponent extends React.Component {
  render() {
    return (
      <ProductComponentWrapper>
        <img src={product} alt="product" />
        <p style={{
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '18px',
          lineHeight: '160%'
        }}>
          Apollo Running Short
        </p>
        <p style={{
          fontWeight: '500',
          fontStyle: 'normal',
          fontSize: '18px',
          lineHeight: '160%'
        }}>
          $50.00
        </p>
        <div className={'cartImage'} style={{display: 'none'}}>
          <img src="../assets/addToCartLogo.svg" alt=''/>
        </div>
      </ProductComponentWrapper>
    )
  }
}

export default ProductComponent;