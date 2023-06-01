import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { Global } from '@emotion/react';
import { App } from 'components';
import 'modern-normalize';
import { GlobalStyles } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="tweets1">
        <Global styles={GlobalStyles} />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
