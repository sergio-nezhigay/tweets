import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteUserIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteUser: (state, action) => {
      state.favoriteUserIds.push(action.payload);
    },
    removeFavoriteUser: (state, action) => {
      state.favoriteUserIds = state.favoriteUserIds.filter(
        id => id !== action.payload
      );
    },
  },
});

export const { addFavoriteUser, removeFavoriteUser } = favoritesSlice.actions;
export default favoritesSlice.reducer;
