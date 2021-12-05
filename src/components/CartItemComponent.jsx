import React from "react";
import SizeProductButton from "../styled/SizeProductButton";
import product from '../assets/product.png';
import CartLeftColumn from "../styled/CartLeftColumn";
import CartCounterButton, { Button } from "../styled/CartCounterButton";

class CartItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      total: 50
    }
  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <>
        <hr align="left" width="1100" size="1" color="#E5E5E5"
          style={{
            marginTop: '0px',
          }} />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '1100px'
        }}>
          <CartLeftColumn>
            <p style={{
              fontWeight: '600',
              fontSize: '30px',
              lineHeight: '27px',
              margin: '0',
              marginBottom: '15px'
            }}>
              Apollo
            </p>
            <p style={{
              fontSize: '30px',
              lineHeight: '27px',
              margin: '0',
              marginBottom: '30px'
            }}>
              Running Short
            </p>
            <p style={{
              fontWeight: 'bold',
              fontSize: '24px',
              lineHeight: '18px',
              margin: '0',
              marginBottom: '30px'
            }}>
              ${this.state.total}.00
            </p>
            <div>
              <SizeProductButton>S</SizeProductButton>
              <SizeProductButton>M</SizeProductButton>
            </div>
          </CartLeftColumn>
          <div style={{
            display: 'flex',
            width: '200px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <CartCounterButton >
                <Button sign='+'
                  count={this.state.count}
                  updateCount={this.handleCount.bind(this)}
                  total={this.state.total * 2} />
              </CartCounterButton>
              <p style={{ textAlign: 'center' }}>
                {this.state.count}
              </p>
              <CartCounterButton>
                <Button sign='-' count={this.state.count} updateCount={this.handleCount.bind(this)} />
              </CartCounterButton>
            </div>
            <div>
              <img src={product} alt="" style={{ width: '140px', height: '179px' }} />
            </div>
          </div>
        </div>
        <hr align="left" width="1100" size="1" color="#E5E5E5"
          style={{
            marginBottom: '0px'
          }} />
        <h2>Total 100$</h2>
      </>
    )
  }
}

export default CartItemComponent;