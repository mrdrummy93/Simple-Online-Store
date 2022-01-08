import {
  ADD_TO_CART, CHANGE_COUNT, CHANGE_CURRENCY, CHANGE_ACTIVE_ATTRIBUTES,
} from './actionsType';

export const changeCurrency = (currency) => ({
  type: CHANGE_CURRENCY,
  payload: { currency },
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product },
});

export const changeCount = (index, value) => ({
  type: CHANGE_COUNT,
  payload: { index, value },
});

export const changeActiveAttributes = (index, activeAttributes) => ({
  type: CHANGE_ACTIVE_ATTRIBUTES,
  payload: { index, activeAttributes },
});
