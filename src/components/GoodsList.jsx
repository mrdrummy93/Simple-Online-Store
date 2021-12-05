import React from "react";
import ContentWrapper from "../styled/ContentWrapper";
import ProductComponent from "./ProductComponent";

const GoodsList = () => {
  return (
    <ContentWrapper>
      <a href="/product">
        <ProductComponent />
      </a>
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
    </ContentWrapper>
  )
}

export default GoodsList;