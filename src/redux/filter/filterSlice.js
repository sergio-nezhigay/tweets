import { createSlice } from '@reduxjs/toolkit';
import { SHOW_ALL } from 'constants';

const filterInitialState = SHOW_ALL;
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
