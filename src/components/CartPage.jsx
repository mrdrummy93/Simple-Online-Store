import React from "react";
import CartItemComponent from "./CartItemComponent";

const CartPage = () => {
  return (
    <div>
      <h1 style={{paddingBottom: '70px'}}>
        CART
      </h1>
      <CartItemComponent />
    </div>
  )
}

export default CartPage;