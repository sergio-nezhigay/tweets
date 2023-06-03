import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SHOW_ALL,
  SHOW_FOLLOW,
  SHOW_FOLLOWING,
  USERS_PER_PAGE,
} from 'constants';

axios.defaults.baseURL = 'https://64787027362560649a2dc491.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page = 1, limit = USERS_PER_PAGE }) => {
    const url = `/users?page=${page}&limit=${limit}`;
    const response = await axios.get(url);
    return response.data;
  }
);

export const loadMoreUsers = createAsyncThunk(
  'users/loadMoreUsers',
  async ({ page = 1, limit = USERS_PER_PAGE }) => {
    const url = `/users?page=${page}&limit=${limit}`;
    const response = await axios.get(url);
    return response.data;
  }
);

export const fetchUsersInit = createAsyncThunk(
  'users/fetchUsersInit',
  async () => {
    const url = `/users?page=${1}&limit=${USERS_PER_PAGE}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const getAmIFollowParameter = filter => {
  if (filter === SHOW_FOLLOW) {
    return '&amIFollow=false';
  } else if (filter === SHOW_FOLLOWING) {
    return '&amIFollow=true';
  }
  return '';
};

export const countUsers = createAsyncThunk(
  'users/countUsers',
  async (filter = SHOW_ALL) => {
    const response = await axios.get(
      `/users?page=${1}&limit=${100}${getAmIFollowParameter(filter)}`
    );
    return response.data.length;
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, ...user }) => {
    const response = await axios.put(`/users/${id}`, user);
    return response.data;
  }
);
