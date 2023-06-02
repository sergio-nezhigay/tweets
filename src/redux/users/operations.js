import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64787027362560649a2dc491.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page = 1, limit = 3 }) => {
    const response = await axios.get(`/users?page=${page}&limit=${limit}`);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, ...user }) => {
    const response = await axios.put(`/users/${id}`, user);
    return response.data;
  }
);
