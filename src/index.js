import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import App from './App';

import { client } from './service/apolloClient';

import { store, persistor } from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={'loading...'} persistor={persistor}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
          <Toaster />
        </Provider>{' '}
      </ApolloProvider>{' '}
    </PersistGate>{' '}
  </React.StrictMode>
);
