import {
  CHANGE_CURRENCY,
} from './actionsType';

export const initialState = {
  currency: 'USD',
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
      };
    default: return state;
  }
}
