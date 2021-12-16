import {
  CHANGE_CURRENCY, ADD_TO_CART, DELETE_FROM_CART, SAVE_CATEGORY, GET_PRODUCTS,
} from './actionsType';

export const initialState = {
  currency: 'USD',
  cart: [],
  categories: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload.product,
        ],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.id,
        ),
      };
    case SAVE_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.categories,
      };
    default: return state;
  }
}
