import React from 'react';
import { connect } from 'react-redux';
import Select from './styled/Select';
import Option from './styled/Option';
import { client } from '../../queries/client';
import { CURRENCIES_REQUEST } from '../../queries/queries';
import { changeCurrency } from '../../store/actions';
import OptionsWrapper from './styled/OptionsWrapper';
import CurrencyWrapper from './styled/CurrencyWrapper';
import CurrencyArrow from './styled/CurrencyArrow';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [{
        label: 'USD',
        symbol: '$',
      }],
      isSelectOpen: false,
    };
  }

  componentDidMount() {
    client.query({
      query: CURRENCIES_REQUEST,
    }).then(({ data }) => {
      this.setState({ currencies: data.currencies });
      // eslint-disable-next-line no-console
    }).catch((e) => console.log(e));
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isSelectOpen: false });
    }
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleChange = (label, symbol) => () => {
    const { handleChangeCurrency } = this.props;
    handleChangeCurrency({ label, symbol });
  }

  toggleSelect = () => {
    this.setState((prevState) => ({ isSelectOpen: !prevState.isSelectOpen }));
  }

  render() {
    const {
      currency,
    } = this.props;
    const {
      currencies,
      isSelectOpen,
    } = this.state;

    return (
      <CurrencyWrapper>
        <CurrencyArrow
          isSelectOpen={isSelectOpen}
        />
        <Select
          onClick={this.toggleSelect}
          role="button"
          tabIndex={0}
          ref={this.setWrapperRef}
        >
          {currency.symbol}
          {isSelectOpen
            && (
              <OptionsWrapper>
                {currencies.map(({ label, symbol }) => (
                  <Option key={label} onClick={this.handleChange(label, symbol)}>
                    {`${symbol} ${label}`}
                  </Option>
                ))}
              </OptionsWrapper>
            )}
        </Select>
      </CurrencyWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.data.currency,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeCurrency: (currency) => dispatch(changeCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
