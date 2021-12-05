import React from "react";
import Button from "../styled/Button";
import MenuWrapper from "../styled/MenuWrapper";
import HeaderWrapper from "../styled/HeaderWrapper";
import Logo from "../styled/Logo";
import Select from "../styled/Select";
import Option from "../styled/Option";
import CartLogo from "../styled/CartLogo";
import emptyCartLogo from '../assets/emptyCart.svg';
import CurrencyAndCartWrapper from "../styled/CurrencyAndCartWrapper";
import MiniCart from "./MiniCart";


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '$ USD',
      showMiniCart: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleShow() {
    this.setState({ showMiniCart: !this.state.showMiniCart });
  }

  render() {

    const miniCart = this.state.showMiniCart ? (
      <MiniCart />
    ) : null;

    return (
      <>
        <HeaderWrapper>
          <MenuWrapper>
            <Button>WOMEN</Button>
            <Button>MEN</Button>
            <Button>KIDS</Button>
          </MenuWrapper>
          <a href="/list">
            <Logo />
          </a>
          <CurrencyAndCartWrapper>
            <Select value={this.state.value} onChange={this.handleChange}>
              <Option value="$ USD">$ USD</Option>
              <Option value="€ EUR">€ EUR</Option>
              <Option value="¥ JPY">¥ JPY</Option>
            </Select>

            <div id='cart-root'></div>
            <CartLogo>
              <button
                style={{
                  backgroundImage: `url(${emptyCartLogo})`,
                  backgroundSize: 'cover',
                  width: '20px',
                  height: '20px',
                  border: 'none',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
                onClick={this.handleShow}>
              </button>
              {miniCart}
            </CartLogo>
          </CurrencyAndCartWrapper>
        </HeaderWrapper>
      </>
    )
  }
}

export default Header;