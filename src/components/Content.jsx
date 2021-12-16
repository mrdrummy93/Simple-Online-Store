import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CartPage from './CartPage';
import ProductPage from './ProductPage';
import GoodsList from './GoodsList';
import { LIST_ROUTE_NAME } from '../routeNames';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to={LIST_ROUTE_NAME} />} />
        <Route exact path={[LIST_ROUTE_NAME, `${LIST_ROUTE_NAME}/:category`]} component={GoodsList} />
        <Route path="/product" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    );
  }
}

export default Content;
