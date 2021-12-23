import React from 'react';
import { connect } from 'react-redux';
import Select from '../styled/Select';
import Option from '../styled/Option';
import { client } from '../queries/client';
import { CURRENCIES_REQUEST } from '../queries/queries';
import { CURRENCY_SIGNS } from '../constants';
import { changeCurrency } from '../store/actions';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currencies: ['USD'],
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

  handleChange(event) {
    const { handleChangeCurrency } = this.props;
    const { value } = event.target;
    handleChangeCurrency(value);
  }

  render() {
    const {
      currency,
    } = this.props;
    const {
      currencies,
    } = this.state;

    return (
      <Select value={currency} onChange={this.handleChange}>
        {currencies.map((item) => (
          <Option value={item} key={item}>
            {`${CURRENCY_SIGNS[item]} ${item}`}
          </Option>
        ))}
      </Select>
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
