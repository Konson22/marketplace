import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import ItemsContextProvider from './contexts/ItemsContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css'
import './global-styles/global-styles.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <ItemsContextProvider>
          <App />
        </ItemsContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


