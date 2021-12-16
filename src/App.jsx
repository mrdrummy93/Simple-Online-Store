import React from 'react';
import { connect } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import AppWrapper from './styled/AppWrapper';
import './App.css';
import { client } from './queries/client';
import { CATEGORIES_REQUEST } from './queries/queries';
import { GET_PRODUCTS, SAVE_CATEGORY } from './store/actionsType';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    client.query({
      query: CATEGORIES_REQUEST,
    }).then(({ data }) => {
      this.setState({ categories: data.categories });
    // eslint-disable-next-line no-console
    }).catch((e) => console.log(e));
  }

  render() {
    const {
      categories,
    } = this.state;

    return (
      <AppWrapper>
        <Header
          categories={categories}
        />
        <Content />
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  saveCategory: (categories) => dispatch({ type: SAVE_CATEGORY, payload: { categories } }),
  getProducts: (products) => dispatch({ type: GET_PRODUCTS, payload: { products } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
