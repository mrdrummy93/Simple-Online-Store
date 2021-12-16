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
      prices {
        currency
        amount
      }
    }
  }
}
`;

export const CURRENCIES_REQUEST = gql`
  query CurrenciesQuery {
    currencies
  }
`;
