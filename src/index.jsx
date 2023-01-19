import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/bootstrap.min.css'
import AppRouter from './routes/AppRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);


