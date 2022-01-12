import { gql } from '@apollo/client';

export const CATEGORIES_REQUEST = gql`
  query CategoriesQuery{
    categories{
      name
    }
  }
`;

export const PRODUCTS_REQUEST = gql`
query ProductsQuery($category: CategoryInput) {
  category(input: $category) {
    products {
      name
      id
      inStock
      gallery
      description
      brand
      prices {
        currency {
          label
        }
        amount
      }
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
}
`;

export const CURRENCIES_REQUEST = gql`
  query CurrenciesQuery {
    currencies {
      label
      symbol
    }
  }
`;

export const PRODUCT_REQUEST = gql`
  query ProductsQuery($productId: String!) {
    product(id: $productId) {
        name
        id
        inStock
        gallery
        description
        brand
        prices {
          currency {
            label
          }
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
`;
