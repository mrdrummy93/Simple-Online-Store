import React from "react";
import AddToCartButtonInProduct from "../styled/AddToCartButtonInProduct";
import DescriptionWrapper from "../styled/DescriptionWrapper";
import ImagesWrapper from "../styled/ImagesWrapper";
import ProductImg from "../styled/ProductImg";
import ProductMainImg from "../styled/ProductMainImg";
import ProductPageWrapper from "../styled/ProductPageWrapper";
import SizeProductButton from "../styled/SizeProductButton";

const ProductPage = () => {
  return (
    <ProductPageWrapper>
      <ImagesWrapper>
        <ProductImg />
        <ProductImg />
        <ProductImg />
      </ImagesWrapper>
      <ProductMainImg></ProductMainImg>
      <DescriptionWrapper>
        <h1>Apollo<br /> Running Short</h1>
        <div>
          <h4>SIZE:</h4>
          <div>
            <SizeProductButton>XS</SizeProductButton>
            <SizeProductButton>S</SizeProductButton>
            <SizeProductButton>M</SizeProductButton>
            <SizeProductButton>L</SizeProductButton>
          </div>
        </div>
        <div>
          <h4>PRICE:</h4>
          <p><strong>$50.00</strong></p>
        </div>
        <AddToCartButtonInProduct>ADD TO CART</AddToCartButtonInProduct>
        <p style={{ maxWidth: '300px' }}>
          Find stunning women's cocktail dresses and party dresses.
          Stand out in lace and metallic cocktail dresses and party
          dresses from all your favorite brands.
        </p>
      </DescriptionWrapper>
    </ProductPageWrapper>
  )
}

export default ProductPage;