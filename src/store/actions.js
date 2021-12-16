import {
  ADD_TO_CART, CHANGE_CURRENCY, DELETE_FROM_CART, GET_PRODUCTS, SAVE_CATEGORY,
} from './actionsType';

export const changeCurrency = (currency) => ({
  type: CHANGE_CURRENCY,
  payload: { currency },
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product },
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  payload: { id },
});

export const saveCategory = (categories) => ({
  type: SAVE_CATEGORY,
  payload: { categories },
});

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: { products },
});
