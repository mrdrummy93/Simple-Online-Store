import React from "react";
import MiniCartWrapper from "../styled/MiniCartWrapper";
import CartItemComponent from "./CartItemComponent";

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  render() {
    return (
      <MiniCartWrapper>
        <p><strong>My bag.</strong> 1 item</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <CartItemComponent />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <button style={{
            width: '140px',
            height: '45px',
            backgroundColor: 'white',
            border: '1px solid black'
          }}>
            VIEW BAG
          </button>
          <button style={{
            width: '140px',
            height: '45px',
            backgroundColor: '#5ECE7B',
            color: 'white',
            border: 'none'
          }}>
            CHECKOUT
          </button>
        </div>
      </MiniCartWrapper>
    )
  }
}

export default MiniCart;