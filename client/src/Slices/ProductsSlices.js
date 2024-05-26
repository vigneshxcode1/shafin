import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  product: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    productsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    productsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productsRequest, productsSuccess, productsFailed } = productsSlice.actions;

export default productsSlice.reducer;
