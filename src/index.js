import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Global } from '@emotion/react';
import App from 'components/App';

import 'modern-normalize';
import { GlobalStyles } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </Provider>
);
