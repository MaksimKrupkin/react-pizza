import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async () => {
  const { data } = await axios.get(
    `https://6532455a4d4c2e3f333de1d9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
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
