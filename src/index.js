import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import App from 'components/App';
import Provider from 'context/Provider';

import ThemeProvider from './context/themeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root')
);
