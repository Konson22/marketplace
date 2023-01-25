import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ItemsContextProvider from './contexts/ItemsContextProvider';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import './app.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <GlobalContextProvider>
      <ItemsContextProvider>
        <App tab="home" />
      </ItemsContextProvider>
    </GlobalContextProvider>
  </BrowserRouter>
);

