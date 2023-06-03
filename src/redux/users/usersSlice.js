import { createSlice } from '@reduxjs/toolkit';
import {
  loadMoreUsers,
  fetchUsers,
  fetchUsersInit,
  updateUser,
  countUsers,
} from './operations';
import { SHOW_ALL } from 'constants';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsers: 0,
  status: 'idle',
  error: null,
  filter: SHOW_ALL,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    resetPagination(state) {
      state.currentPage = initialState.currentPage;
      state.users = initialState.users;
      state.totalUsers = initialState.totalUsers;
      state.status = initialState.status;
      state.error = initialState.error;
      state.filter = initialState.filter;
    },
    incrementPage(state) {
      state.currentPage++;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(countUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadMoreUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(countUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalUsers = action.payload;
      })
      .addCase(loadMoreUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(...action.payload);
      })
      .addCase(fetchUsersInit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = [...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.status = 'succeeded';
        const index = state.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reducer } = usersSlice;
export const { actions } = usersSlice;
export const { setFilter, incrementPage, resetPagination } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
