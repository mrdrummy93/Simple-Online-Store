import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderWrapper from './style/HeaderWrapper';
import Logo from './style/Logo';
import CartLogo from './style/CartLogo';
import CurrencyAndCartWrapper from './style/CurrencyAndCartWrapper';
import MiniCart from '../MiniCart/MiniCart';
import Currency from '../Currency/Currency';
import HeaderMenuWrapper from '../HeaderMenuWrapper/HeaderMenuWrapper';
import { LIST_ROUTE_NAME } from '../../routeNames';
import CartLogoWrapper from './style/CartLogoWrapper';
import Backdrop from './style/Backdrop';
import CartOverlayTotals from './style/CartOverlayTotals';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMiniCart: false,
    };
  }

  toggleShow = () => {
    const { showMiniCart } = this.state;
    this.setState({ showMiniCart: !showMiniCart });
  }

  render() {
    const { showMiniCart } = this.state;
    const { categories, cart } = this.props;

    const miniCart = showMiniCart ? (
      <>
        <Backdrop onClick={this.toggleShow} />
        <MiniCart toggleShow={this.toggleShow} />
      </>
    ) : null;
    const cartCount = cart.reduce((acc, item) => acc + item.count, 0);
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
            {!!cartCount && (
              <CartOverlayTotals>
                {cartCount}
              </CartOverlayTotals>
            )}
            <CartLogo
              role="none"
              onClick={this.toggleShow}
            />
            {miniCart}
          </CartLogoWrapper>
        </CurrencyAndCartWrapper>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
