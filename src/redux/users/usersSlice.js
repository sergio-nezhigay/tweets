import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser, countUsers } from './operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalUsers: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(countUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(countUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalUsers = action.payload;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(...action.payload);
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
export const usersReducer = usersSlice.reducer;
