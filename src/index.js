import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Toaster /> {/* => toaster container is better to add here  */}
  </React.StrictMode>,
  document.getElementById('root')
);


