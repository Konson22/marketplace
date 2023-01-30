import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ItemsContextProvider from './contexts/ItemsContextProvider';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import './styles/styles.css'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// const queryClient = new QueryClient()

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <GlobalContextProvider>
      <ItemsContextProvider>
        {/* <QueryClientProvider client={queryClient}> */}
          <App tab="home" />
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        {/* </QueryClientProvider> */}
      </ItemsContextProvider>
    </GlobalContextProvider>
  </BrowserRouter>
);

