import { createStore, combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  cart: cartReducer,
});
export const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
