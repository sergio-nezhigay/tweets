import { toast } from 'react-hot-toast';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { usersReducer } from './users/usersSlice';
import favoritesReducer from './favorites/favoritesSlice';

const errorToastMiddleware = () => next => action => {
  if (action.error) {
    toast.error('An error occurred. ' + action.error.message);
  }
  return next(action);
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const rootReducer = {
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  users: usersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(errorToastMiddleware),
});

export const persistor = persistStore(store);
