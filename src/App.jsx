import React from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import AppWrapper from './styled/AppWrapper';
import './App.css';
import { client } from './queries/client';
import { CATEGORIES_REQUEST } from './queries/queries';

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

export default App;
