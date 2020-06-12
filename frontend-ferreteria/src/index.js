import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/index.css';
import './styles/App.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import {store, persistor } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <PersistGate persistor={persistor}>
                  <App />
              </PersistGate>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
