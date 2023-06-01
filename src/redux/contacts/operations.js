import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PATCH @ /contacts
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contact }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
