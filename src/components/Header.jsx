import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderWrapper from '../styled/HeaderWrapper';
import Logo from '../styled/Logo';
import CartLogo from '../styled/CartLogo';
import CurrencyAndCartWrapper from '../styled/CurrencyAndCartWrapper';
import MiniCart from './MiniCart';
import Currency from './Currency';
import HeaderMenuWrapper from './HeaderMenuWrapper';
import { LIST_ROUTE_NAME } from '../routeNames';
import CartLogoWrapper from '../styled/CartLogoWrapper';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMiniCart: false,
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    const { showMiniCart } = this.state;
    this.setState({ showMiniCart: !showMiniCart });
  }

  render() {
    const { showMiniCart } = this.state;
    const {
      categories,
    } = this.props;

    const miniCart = showMiniCart ? (
      <MiniCart />
    ) : null;

    return (
      <HeaderWrapper>
        {!categories.length ? null : (
          <HeaderMenuWrapper
            categories={categories}
          />
        )}
        <NavLink to={LIST_ROUTE_NAME}>
          <Logo />
        </NavLink>
        <CurrencyAndCartWrapper>
          <Currency />
          <div id="cart-root" />
          <CartLogoWrapper>
            <CartLogo
              role="none"
              onClick={this.handleShow}
            />
            {miniCart}
          </CartLogoWrapper>
        </CurrencyAndCartWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
