// style
import './styles/normalize.scss';
import './styles/global.scss';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
