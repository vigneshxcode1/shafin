import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/ProductsSlices.js';

// Combine reducers
const reducer = combineReducers({
  productsState: productsReducer
});

// Configure store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true
    })
});

export default store;
