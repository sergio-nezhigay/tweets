import { createSlice } from '@reduxjs/toolkit';
import { loadMoreUsers, updateUser, countUsers } from './operations';
import { SHOW_ALL } from 'constants';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsers: 0,
  isLoading: false,
  error: null,
  filter: SHOW_ALL,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
      state.users = [];
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(countUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(countUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalUsers = action.payload;
      })
      .addCase(countUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loadMoreUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadMoreUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(...action.payload);
        state.currentPage++;
      })
      .addCase(loadMoreUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      });
  },
});

export const { reducer } = usersSlice;
export const { actions } = usersSlice;
export const { setFilter } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
