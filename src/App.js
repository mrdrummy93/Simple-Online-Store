import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import AppWrapper from './styled/AppWrapper';
import './App.css';

class App extends React.Component {

  render() {
    return (
        <AppWrapper>
          <Header />
          <Content />
        </AppWrapper>
    )
  }
}

export default App;