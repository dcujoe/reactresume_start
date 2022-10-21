import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//new way of rendering in react 18

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);