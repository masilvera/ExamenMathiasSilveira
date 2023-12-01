import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CharProvider from './utils/global.context';
import './App.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CharProvider>
      <App />
    </CharProvider>
  </BrowserRouter>
);
