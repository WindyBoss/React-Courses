import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import App from 'components/App';
import AuthProvider from 'context/AuthProvider';
import Provider from 'context/Provider';

import ThemeProviderClass from './context/themeProvider';

/*
* AuthProvider on Classes
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    <Toaster/>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// Provider on hooks
ReactDOM.render( 
    <React.StrictMode >
    <ThemeProviderClass>
    <Provider>
    <App/>
    </Provider>
    </ThemeProviderClass>  
    <Toaster / >
    </React.StrictMode>,
    document.getElementById('root')
);