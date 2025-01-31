import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


import store, {persistor} from './store/store'


// Montage de l'application dans le DOM
ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
      </PersistGate>

  </Provider>,
  document.getElementById('root')
);