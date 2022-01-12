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
    const cartCount = cart.length;
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
              <div
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  position: 'absolute',
                  fontSize: '12px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: '-8px',
                  right: '-8px',
                }}
              >
                {cartCount}
              </div>
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
