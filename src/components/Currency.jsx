import React from 'react';
import { connect } from 'react-redux';
import Select from '../styled/Select';
import Option from '../styled/Option';
import { client } from '../queries/client';
import { CURRENCIES_REQUEST } from '../queries/queries';
import { CURRENCY_SIGNS } from '../constants';
import { changeCurrency } from '../store/actions';
import currencyArrow from '../assets/currencyArrow.svg';
import OptionsWrapper from '../styled/OptionsWrapper';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currencies: ['USD'],
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
  }

  handleChange = (value) => () => {
    const { handleChangeCurrency } = this.props;
    handleChangeCurrency(value);
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
      <div style={{
        position: 'relative', display: 'flex', alignItems: 'center',
      }}
      >
        <img
          style={{
            width: '10px',
            height: '10px',
            right: 0,
            position: 'absolute',
            zIndex: -1,
            transform: `rotate(${isSelectOpen ? 0 : 180}deg)`,
          }}
          src={currencyArrow}
          alt="arrow"
        />
        <Select
          onClick={this.toggleSelect}
          role="button"
          tabIndex={0}
        >
          {CURRENCY_SIGNS[currency]}
          {isSelectOpen
            && (
              <OptionsWrapper>
                {currencies.map((item) => (
                  <Option key={item} onClick={this.handleChange(item)}>
                    {`${CURRENCY_SIGNS[item]} ${item}`}
                  </Option>
                ))}
              </OptionsWrapper>
            )}
        </Select>
      </div>
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
