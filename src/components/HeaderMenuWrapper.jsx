import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';
import MenuWrapper from '../styled/MenuWrapper';
import Button from '../styled/Button';
import { LIST_ROUTE_NAME } from '../routeNames';

class HeaderMenuWrapper extends Component {
  render() {
    const {
      categories,
      location: {
        pathname,
      },
    } = this.props;
    let currentCategory = null;
    if (pathname.includes(`${LIST_ROUTE_NAME}/`)) {
      const routesPath = pathname.split('/');
      [, , currentCategory] = routesPath;
    }
    return (
      <MenuWrapper>
        {categories.map((category) => (
          <NavLink
            key={category.name}
            to={`${LIST_ROUTE_NAME}/${category.name}`}
          >
            <Button
              currentCategory={currentCategory}
              category={category.name}
            >
              {category.name}
            </Button>
          </NavLink>
        ))}
      </MenuWrapper>
    );
  }
}

export default withRouter(HeaderMenuWrapper);
