import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERS_PER_PAGE } from 'constants';

axios.defaults.baseURL = 'https://64787027362560649a2dc491.mockapi.io';

export const loadMoreUsers = createAsyncThunk(
  'users/loadMoreUsers',
  async (page = 1) => {
    const url = `/users?page=${page}&limit=${USERS_PER_PAGE}`;
    const response = await axios.get(url);
    return response.data;
  }
);

export const countUsers = createAsyncThunk('users/countUsers', async () => {
  const response = await axios.get(`/users?page=${1}&limit=${100}`);
  return response.data.length;
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, ...user }) => {
    const response = await axios.put(`/users/${id}`, user);
    return response.data;
  }
);
