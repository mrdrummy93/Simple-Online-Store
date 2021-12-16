import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';
import ContentWrapper from '../styled/ContentWrapper';
import ProductComponent from './ProductComponent';
import { client } from '../queries/client';
import { PRODUCTS_REQUEST } from '../queries/queries';

class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.queryCategory();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {
          category,
        },
      },
    } = this.props;
    const { list } = this.state;
    if (prevProps.match.params.category !== category || !list.length) {
      this.queryCategory();
    }
  }

  queryCategory = () => {
    const {
      match: {
        params: {
          category,
        },
      },
    } = this.props;
    client.query({
      query: PRODUCTS_REQUEST,
      variables: category ? { category: { title: category } } : undefined,
    }).then(({ data }) => {
      this.setState({ list: data.category.products });
      // eslint-disable-next-line no-console
    }).catch((e) => console.log(e));
  }

  render() {
    const {
      match: {
        params: {
          category,
        },
      },
    } = this.props;
    const { list } = this.state;
    return (
      <>
        <h1 style={{
          paddingBottom: '70px',
          marginTop: '40px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '42px',
          lineHeight: '160%',
          textTransform: 'uppercase',
        }}
        >
          {category || 'Choose category'}
        </h1>
        <ContentWrapper>
          {list.map((item) => (
            <ProductComponent item={item} key={item.id} />
          ))}
        </ContentWrapper>
      </>
    );
  }
}
export default withRouter(GoodsList);
