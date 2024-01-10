import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const { setItems } = cartSlice.actions;

export default cartSlice.reducer;
