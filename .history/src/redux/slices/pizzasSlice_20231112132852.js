import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchPizzas = createAsyncThunk('pizza/fetchByIdStatus', async () => {
  const response = await userAPI.fetchById(userId);
  return response.data;
});

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
