import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { Global } from '@emotion/react';
import { globalStyles } from './shared/styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);