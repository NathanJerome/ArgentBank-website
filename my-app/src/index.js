import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';

// Montage de l'application dans le DOM
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);