import {
  ADD_TO_CART, CHANGE_ACTIVE_ATTRIBUTES, CHANGE_COUNT,
} from './actionsType';

export const initialState = [];

const isSameProduct = (prod1, prod2) => prod1.uniqId === prod2.uniqId;

const isProductInCart = (cart, product) => cart.some((el) => isSameProduct(product, el));

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action.payload;
      if (isProductInCart(state, product)) {
        return state.map((el) => {
          if (isSameProduct(el, product)) {
            return {
              ...el,
              count: el.count + 1,
            };
          }
          return el;
        });
      }
      return [
        ...state,
        {
          ...product,
          count: 1,
        },
      ];
    }
    case CHANGE_COUNT: {
      return state.map((product, index) => {
        if (index === action.payload.index) {
          const count = product.count + action.payload.value;
          if (!count) {
            return null;
          }
          return {
            ...product,
            count,
          };
        }
        return product;
      }).filter((product) => !!product);
    }
    case CHANGE_ACTIVE_ATTRIBUTES: {
      return state.map((product, index) => {
        if (index === action.payload.index) {
          return { ...product, activeAttributes: action.payload.activeAttributes };
        }
        return product;
      });
    }
    default: return state;
  }
}
