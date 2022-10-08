/** @format */

import React from 'react';
import { App } from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <App />
      <Toaster />
  </React.StrictMode>
);
